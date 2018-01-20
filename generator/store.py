
class EntityStore:
    def __init__(self):
        self.entities = []

    def add(self, new_entity):
        for i, entity in enumerate(self.entities):
            if entity.check_duplicity(new_entity):
                self.entities[i].merge(new_entity)
                return
        self.entities.append(new_entity)

    def map_similar(self, compared_entity):
        entities = sorted(self.entities, key=lambda e: e.similarity(compared_entity))

        for i, mention in enumerate(compared_entity.mentions):
            for entity in entities:
                compatible = mention.find_compatible(entity.mentions)
                if compatible:
                    mention.map(compatible)
                    break
            compared_entity.mentions[i] = mention
        return compared_entity

