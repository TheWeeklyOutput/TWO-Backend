import random
from .base import BaseObject
from .helpers import meta

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
            meta(self.determiner),
            meta(self.amod),
            meta(self.advmod),
            tuple(meta(token) for token in self.tokens)
        )
