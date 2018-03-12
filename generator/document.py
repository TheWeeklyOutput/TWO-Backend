import math
import random
from google.cloud.language import enums
from tqdm import tqdm
from backend.knowledge.wikidata import image_search
from .base import BaseObject
from .helpers import meta
from .token import Token
from .entity import Entity
from .sentence import Sentence

class Document(BaseObject):
    def __init__(self, tokens, sentences, entities):
        self.tokens = tokens
        self.sentences = sentences
        self.entities = entities

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
