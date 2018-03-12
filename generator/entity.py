import random
from .base import BaseObject
from .helpers import sigmoid
from .mention import Mention

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
