import math
import random
from tqdm import tqdm
from backend.knowledge.wikidata import image_search

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

def meta(x): 
    if x is None:
        return None
    return x.__meta__()

class BaseObject(object):
    @staticmethod
    def find_appendant(items, begin_offset, end_offset):
        appendant_items = []
        for item in items:
            if item.begin >= begin_offset \
                    and item.begin < end_offset:
                appendant_items.append(item)
        return appendant_items

    @classmethod
    def from_language_cloud_repr(cls, *args, **kwargs):
        return NotImplemented

    @classmethod
    def from_repr(cls, obj, *args, **kwargs):
        module = obj.__module__
        if 'backend.generator' in module:
            return obj
        if 'google.cloud.language' in module:
            return cls.from_language_cloud_repr(obj, *args, **kwargs)

class PartOfSpeech(BaseObject):
    def __init__(self, tag, aspect, case, form, gender, mood, number,
                person, proper, reciprocity, tense, voice):
        self.tag = tag
        self.aspect = aspect
        self.case = case
        self.form = form
        self.gender = gender
        self.mood = mood
        self.number = number
        self.person = person
        self.proper = proper
        self.reciprocity = reciprocity
        self.tense = tense
        self.voice = voice

    @classmethod
    def from_language_cloud_repr(cls, pos):
        return cls(
            pos.tag,
            pos.aspect,
            pos.case,
            pos.form,
            pos.gender,
            pos.mood,
            pos.number,
            pos.person,
            pos.proper,
            pos.reciprocity,
            pos.tense,
            pos.voice,
        )
    
    def __meta__(self):
        return tuple(self.__dict__.values())

class Token(BaseObject):
    def __init__(self, doc, text, begin, index, edge_index, edge_label, pos):
        self.doc = doc
        self.text = text
        self.begin = begin
        self.index = index
        self.edge_index = edge_index
        self.edge_label = edge_label
        self.pos = pos

    def map(self, token):
        text = token.text
        if self.text.istitle():
            text = text.title()
        if self.text.islower():
            text = text.lower()

        self.text = token.text
        self.edge_label = token.edge_label

    def direct_children(self):
        return [t for t in self.doc.tokens if t.edge_index == self.index]

    def find_child(self, edge_label, token=None, depth=0, max_depth=100):
        if depth > max_depth:
            return None
        children = self.direct_children()
        for token in children:
            if token.edge_label == edge_label:
                return token
            child = token.find_child(edge_label, depth=depth+1)
            if child:
                return child
        return None

    def find_parent(self, edge_label):
        parent = self.doc.tokens[self.edge_index]
        if parent.edge_label == edge_label:
            return parent
        if self.edge_index != parent.edge_index:
            return parent.find_parent(edge_label)

    @classmethod
    def from_language_cloud_repr(cls, token, doc):
        pos = PartOfSpeech.from_repr(token.part_of_speech)
        return cls(
            doc,
            token.text.content,
            token.text.begin_offset,
            doc.tokens.index(token),
            token.dependency_edge.head_token_index,
            token.dependency_edge.label,
            pos
        )

    def __meta__(self):
        return (self.edge_label, meta(self.pos))

class Sentence(BaseObject):
    def __init__(self, text, tokens, begin, sentiment, mentions):
        self.text = text
        self.tokens = tokens
        self.begin = begin
        self.sentiment = sentiment
        self.mentions = mentions

    @classmethod
    def from_language_cloud_repr(cls, sentence, entities, tokens):
        begin_offset = sentence.text.begin_offset
        end_offset = begin_offset + len(sentence.text.content)

        mentions = [m for e in entities for m in e.mentions]
        mentions = cls.find_appendant(mentions, begin_offset, end_offset)
        stokens = cls.find_appendant(tokens, begin_offset, end_offset)

        return cls(
            sentence.text.content,
            stokens,
            begin_offset,
            sentence.sentiment.score,
            mentions
        )

class Mention(BaseObject):
    def __init__(self, text, begin, mention_type, tokens):
        self.text = text
        self.begin = begin
        self.mention_type = mention_type
        self.tokens = tokens

        self.root = tokens[0].find_parent('ROOT')
        self.determiner = tokens[0].find_child('DET')
        self.amod = tokens[0].find_child('AMOD')
        self.advmod = tokens[0].find_child('ADVMOD')
        self.mapped = False

    def map(self, mention):
        self.text = mention.text
        tokens = []
        for token, replace_token in zip(self.tokens, mention.tokens):
            token.map(replace_token)
            tokens.append(token)
        self.tokens = tokens

        relevant = [
            (self.root, mention.root),
            (self.determiner, mention.determiner),
            (self.amod, mention.amod),
            (self.advmod, mention.advmod)
        ]

        for a, b in relevant:
            if a is not None and b is not None:
                a.map(b)

        self.mapped = True

    def check_compatibility(self, mention):
        if self.mapped or self.text == mention.text:
            return False
        return meta(self) == meta(mention)

    def find_compatible(self, mentions):
        compatible = [m for m in mentions if self.check_compatibility(m)]
        if len(compatible) > 0:
            return random.choice(compatible)
        return False

    @classmethod
    def from_language_cloud_repr(cls, mention, tokens):
        begin_offset = mention.text.begin_offset
        end_offset = begin_offset + len(mention.text.content)

        mtokens = cls.find_appendant(tokens, begin_offset, end_offset)
        return cls(
            mention.text.content,
            mention.text.begin_offset,
            mention.type,
            mtokens
        )

    def __meta__(self):
        return (
            self.mention_type,
            meta(self.root),
            #meta(self.determiner),
            meta(self.amod),
            meta(self.advmod),
            tuple(meta(token) for token in self.tokens)
        )

class Entity(BaseObject):
    def __init__(self, name, mentions, entity_type, metadata, salience):
        self.name = name
        self.mentions = mentions
        self.entity_type = entity_type
        self.metadata = metadata
        self.salience = salience

    def similarity(self, entity):
        if self.entity_type != entity.entity_type:
            return 0

        salience_difference = abs(self.salience - entity.salience)
        if salience_difference == 0:
            if self.check_duplicity(entity):
                return 0
            return 1
        return sigmoid(1/salience_difference) + (random.random() / 5) - 0.1

    def check_duplicity(self, entity):
        if self.entity_type != entity.entity_type:
            return False

        duplicate = self.name == entity.name
        duplicate = duplicate or (self.name in [m.text for m in entity.mentions])
        duplicate = duplicate or (entity.name in [m.text for m in self.mentions])
        return duplicate

    def merge(self, entity):
        self.mentions.extend(entity.mentions)
        self.salience = (self.salience + entity.salience) / 2

    @classmethod
    def from_language_cloud_repr(cls, entity, tokens):
        mentions = []
        for mention in entity.mentions:
            mention = Mention.from_repr(mention, tokens)
            mentions.append(mention)

        return cls(
            entity.name,
            mentions,
            entity.type,
            entity.metadata,
            entity.salience
        )

class Document(BaseObject):
    def __init__(self, tokens, sentences, entities):
        self.tokens = tokens
        self.sentences = sentences
        self.entities = entities

    def image_search(self):
        progress = tqdm([m for s in self.sentences for m in s.mentions], desc='')
        for mention in progress:
            progress.set_description('Image Search for: {0}'.format(mention.text))
            image_url, image_credit = image_search(mention.text)
            if image_url:
                return image_url, image_credit
        return None, None

    def to_content(self):
        res = ' '
        in_chars = {
            '[ ]': False,
            '( )': False,
            '\'': False,
            '"': False,
        }

        space = True
        next_space = True
        for sentence in self.sentences:
            sentence_str = ''
            for token in sentence.tokens:
                dash = token.text in '— – - _'
                abr = token.text in ['\'s', 'n\'t', '\'re', '\'m', 'na', '\'ve', '\'d']
                space = space and not dash and not abr
                next_space = next_space and not dash

                space = space and token.pos.tag != 'PUNCT'
                space = space and token.edge_label != 'PS'

                for chars, in_char in in_chars.items():
                    if token.text in chars:
                        in_chars[chars] = not in_char
                        next_space = next_space or in_char
                        space = space or not in_char

                if space:
                    sentence_str += ' '

                sentence_str += token.text
                space = next_space
                next_space = True
            space = False
            print(sentence_str)
            print('\n')
            print('\n')

            res += sentence_str.strip() + ' \n'

        res = res.replace('-- ', ' -- ')
        res = res.replace('[ ', '[')
        res = res.replace('( ', '(')
        res = res.replace(' " ', ' "')
        res = res.replace(' \' ', ' \'')
        res = res.replace('\n" ', '\n"')
        res = res.replace('\n\' ', '\n\'')

        title = 'No Title :('
        print(res)
        print('\n')
        arr = res.split('[]')
        if len(arr[0]) < 150:
            title = arr.pop(0).strip()

        return title, arr, self.image_search()

    @classmethod
    def from_language_cloud_repr(cls, cloud_doc):
        doc = cls(
            list(cloud_doc.tokens),
            list(cloud_doc.sentences),
            list(cloud_doc.entities)
        )
        
        for i, token in enumerate(cloud_doc.tokens):
            token = Token.from_repr(token, doc)
            doc.tokens[i] = token

        for i, entity in enumerate(cloud_doc.entities):
            entity = Entity.from_repr(entity, doc.tokens)
            doc.entities[i] = entity

        for i, sentence in enumerate(cloud_doc.sentences):
            sentence = Sentence.from_repr(sentence, doc.entities, doc.tokens)
            doc.sentences[i] = sentence
        return doc
