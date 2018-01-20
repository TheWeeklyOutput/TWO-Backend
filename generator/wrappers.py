
def meta(x):
    return x.__meta__()

class BaseObject(object):
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
            token.text_begin,
            token.text_begin,
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

        mentions = []

        for mention in [m for e in doc.entities for m in e.mentions]:
            if mention.begin_offset >= begin_offset \
                    and mention.begin_offset <= end_offset:
                mentions.append(mention)

        tokens = []
        for token in doc.tokens:
            if token.begin >= begin_offset \
                    and token.begin <= end_offset:
                tokens.append(token)

        return cls(
            sentence.content,
            tokens,
            sentence.begin,
            sentence.sentiment.score,
            mentions
        )

class Mention(BaseObject):
    def __init__(self, text, begin_offset, mention_type, tokens):
        self.text = text
        self.begin_offset = begin_offset
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
        if self.mapped:
            return False
        return meta(self) == meta(mention)

    def find_compatible(self, mentions):
        for mention in mentions:
            if self.check_compatibility(mention):
                return mention
        return False

    @classmethod
    def from_language_cloud_repr(cls, mention, doc):
        begin_offset = mention.text.begin_offset
        end_offset = begin_offset + len(mention.text.content)

        tokens = []
        for token in doc.tokens:
            if token.begin >= begin_offset \
                    and token.begin <= end_offset:

                tokens.append(token)

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
        return 1/salience_difference

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

    def rebuild(self):
        for mention in [m for e in self.entities for m in e.mentions]:
            for m_token in mention.tokens:
                for i, token in enumerate(self.tokens):
                    if m_token.begin == token.begin:
                        self.tokens[i].map(m_token)

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
        return title, res

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
