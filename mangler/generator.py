from backend.mangler.models import Document, Token, Entity, Mention, Sentence
from backend.brain.knowledge import KnowledgeSources

class Generator:
    def __init__(self, category, outlet):
        self.document = Document.objects.filter(
            category=category,
            outlet=outlet,
            generated=False
        ).order_by('?').first()

        self.knowledge = KnowledgeSources()

        self.tokens = Token.objects.filter(document=self.document)
        self.entities = Entity.objects.filter(documents=self.document)
        self.sentences = Sentence.objects.filter(document=self.document)

        self.clone_document()

    def clone_document(self):
        headline = self.document.headline
        headline.pk = None
        headline.save()

        self.document.headline = headline
        self.document.pk = None
        self.document.generated = True
        self.document.save()

        for token in self.tokens:
            token.pk = None
            token.document = self.document
            token.save()

        for entity in self.entities:
            mentions = Mention.objects.filter(entity=entity)

            entity.pk = None
            entity.save()

            entity.documents.clear()
            entity.documents.add(self.document)
            entity.save()

            for mention in mentions:
                mention.pk = None
                mention.entity = entity
                mention.save()

    def generate(self):
        self.choose_entities()
        self.generate_sentence(self.document.headline)

        for sentence in self.sentences:
            self.generate_sentence(sentence)
        
        return self.document

    def choose_entities(self):
        enities = self.entities# []
        #enities += self.knowledge.trending_entities(self.document.category)

        for entity in enities:
            similar_entity = self.entities.filter(
                entity_type=entity.entity_type,
                generated=False
            ).order_by('?').first()

            if similar_entity is None:
                print("Similar is None")
                continue

            print("Replacing: "+ similar_entity.name)
            print("With: "+ entity.name)
            print()

            similar_entity.name = entity.name
            similar_entity.generated = True
            similar_entity.save()

            mentions = Mention.objects.filter(entity=entity)
            for mention in mentions:
                text = mention.text
                text.pk = None
                text.content = entity.name
                text.save()
                mention.text = text
                mention.save()

    def generate_sentence(self, sentence):
        tokens = self.tokens.filter(sentence=sentence)
        for token in tokens:
            print(token)
            mention = self.search_mention_for_token(token)
            if not mention:
                continue
            token.text = mention.text.content
            token.save()


    def search_mention_for_token(self, token):
        for entity in self.entities:
            mentions = Mention.objects.filter(entity=entity)
            for mention in mentions:
                if mention.text.begin_offset == token.document_index:
                    return mention
                    print("Mention found for Token")

        return False
