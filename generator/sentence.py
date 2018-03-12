from .base import BaseObject

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

