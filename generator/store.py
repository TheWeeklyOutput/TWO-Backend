from tqdm import tqdm
from .entity import Entity

class EntityStore:
    def __init__(self):
        self.entities = []

    def add_docs(self, docs):
        for doc in tqdm(docs, desc='Storing Entities'):
            self.add_doc(doc)

    def add_doc(self, doc):
        for entity in doc.entities:
            self.add(entity)

    def add(self, new_entity):
        for i, entity in enumerate(self.entities):
            if entity.check_duplicity(new_entity):
                self.entities[i].merge(new_entity)
                return
        self.entities.append(new_entity)

    def map_similar(self, compared_entity):
        entities = [e for e in self.entities if e.entity_type == compared_entity.entity_type]
        entities = sorted(entities, key=lambda e: e.similarity(compared_entity))

        for i, mention in enumerate(compared_entity.mentions):
            for entity in entities:
                compatible = mention.find_compatible(entity.mentions)
                if compatible:
                    mention.map(compatible)
                    break
            compared_entity.mentions[i] = mention
        return compared_entity
