import math
import random
from backend.knowledge.wikidata import image_search

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

def meta(x):
    return x.__meta__()

class BaseObject(object):
    @staticmethod
    def find_appendant(items, begin_offset, end_offset):
        appendant_items = []
        for item in items:
            if item.begin >= begin_offset \
                    and item.begin <= end_offset:
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
        self.text = token.text
        self.edge_label = token.edge_label

    @classmethod
    def from_language_cloud_repr(cls, token, doc):
        return cls(
            doc,
            token.text_content,
            token.text_begin,
            doc.tokens.index(token),
            token.edge_index,
            token.edge_label,
            token.part_of_speech
        )

    def __meta__(self):
        return (self.edge_label, tuple(self.pos.__dict__.values()))

class Sentence(BaseObject):
    def __init__(self, text, tokens, begin, sentiment, mentions):
        self.text = text
        self.tokens = tokens
        self.begin = begin
        self.sentiment = sentiment
        self.mentions = mentions

    @classmethod
    def from_language_cloud_repr(cls, sentence, doc):
        begin_offset = sentence.begin
        end_offset = begin_offset + len(sentence.content)

        mentions = [m for e in doc.entities for m in e.mentions]
        mentions = cls.find_appendant(mentions, begin_offset, end_offset)
        tokens = cls.find_appendant(doc.tokens, begin_offset, end_offset)

        return cls(
            sentence.content,
            tokens,
            sentence.begin,
            sentence.sentiment.score,
            mentions
        )

class Mention(BaseObject):
    def __init__(self, text, begin, mention_type, tokens):
        self.text = text
        self.begin = begin
        self.mention_type = mention_type
        self.tokens = tokens
        self.mapped = False

    def map(self, mention):
        print(self.text, mention.text)
        self.text = mention.text
        tokens = []
        for token, replace_token in zip(self.tokens, mention.tokens):
            token.map(replace_token)
            tokens.append(token)
        self.tokens = tokens

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
    def from_language_cloud_repr(cls, mention, doc):
        begin_offset = mention.text.begin_offset
        end_offset = begin_offset + len(mention.text.content)

        tokens = cls.find_appendant(doc.tokens, begin_offset, end_offset)

        return cls(
            mention.text.content,
            mention.text.begin_offset,
            mention.mention_type,
            tokens
        )

    def __meta__(self):
        return (self.mention_type, tuple(meta(token) for token in self.tokens))

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
        return sigmoid(1/salience_difference)

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
    def from_language_cloud_repr(cls, entity, doc):
        mentions = []
        for mention in entity.mentions:
            mention = Mention.from_repr(mention, doc)
            mentions.append(mention)

        return cls(
            entity.name,
            mentions,
            entity.entity_type,
            entity.metadata,
            entity.salience
        )

class Document(BaseObject):
    def __init__(self, tokens, sentences, entities):
        self.tokens = tokens
        self.sentences = sentences
        self.entities = entities

    def image_search(self):
        for sentence in self.sentences:
            for mention in sentence.mentions:
                image_url, image_credit = image_search(mention.text)
                if image_url:
                    return image_url, image_credit

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
            for token in sentence.tokens:
                dash = token.text in '— – - _'
                abr = token.text in '\'s n\'t \'re'
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
                    res += ' '

                res += token.text
                space = next_space
                next_space = True
            space= False
            res += ' \n'

        res = res.replace('-- ', ' -- ')
        res = res.replace('[ ', '[')
        res = res.replace('( ', '(')

        res = res.replace(' " ', ' "')
        res = res.replace(' \' ', ' \'')

        title = 'No Title :('
        arr = res.split('[]')
        if len(arr[0]) < 100:
            title = arr.pop(0).rstrip()

        res = ''.join(arr)
        return title, res, self.image_search()

    @classmethod
    def from_language_cloud_repr(cls, doc):
        for i, token in enumerate(doc.tokens):
            token = Token.from_repr(token, doc)
            doc.tokens[i] = token

        for i, entity in enumerate(doc.entities):
            entity = Entity.from_repr(entity, doc)
            doc.entities[i] = entity

        for i, sentence in enumerate(doc.sentences):
            sentence = Sentence.from_repr(sentence, doc)
            doc.sentences[i] = sentence

        return cls(
            doc.tokens,
            doc.sentences,
            doc.entities
        )
