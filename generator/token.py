from .base import BaseObject
from .pos import PartOfSpeech
from .helpers import meta

class Token(BaseObject):
    def __init__(self, doc, text, lemma, begin, index, edge_index, edge_label, pos):
        self.doc = doc
        self.text = text
        self.lemma = lemma
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
        if self.text.isupper():
            text = text.upper()

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
            token.lemma,
            token.text.begin_offset,
            doc.tokens.index(token),
            token.dependency_edge.head_token_index,
            token.dependency_edge.label,
            pos
        )

    def __meta__(self):
        return (self.edge_label, meta(self.pos))
