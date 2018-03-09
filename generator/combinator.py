from django.core.exceptions import EmptyResultSet
from backend.corpora.manager import load_corpora, save_article
from .wrappers import Document
from .store import EntityStore
from tqdm import tqdm

class Combinator: 
    def __init__(self, **kwargs):
        self.generation_args = kwargs
        self.docs = self.load_documents(**kwargs)
        self.original_doc = self.docs.first()
        print('Generating new Document from: ' + self.original_doc.title)

        self.base_doc = Document.from_repr(self.original_doc.annotations)
        print(self.base_doc.sentences)

        self.entity_store = EntityStore()
        self.fill_store()

    def load_documents(self, **kwargs):
        docs = load_corpora(
            random=True,
            **kwargs
        )

        if len(docs) < 1:
            raise EmptyResultSet('No Documents for Category')
        return docs

    def fill_store(self):
        progress = tqdm(self.docs, desc='Parsing Documents')
        docs = [Document.from_repr(doc.annotations) for doc in progress]
        self.entity_store.add_docs(docs)
        print(self.base_doc.sentences)

    def map_entities(self):
        progress = tqdm(self.base_doc.entities, desc='Mapping Entities')
        for i, entity in enumerate(progress):
            progress.set_description('Mapping: {0}'.format(entity.name))
            entity = self.entity_store.map_similar(entity)
            self.base_doc.entities[i] = entity

    def generate(self):
        self.map_entities()
        print(self.base_doc.sentences)

    def save(self):
        title, paragraphs, image_data = self.base_doc.to_content()
        image_url, image_credit = image_data

        print('Original: ' + self.original_doc.title)
        print(title)
        print(paragraphs)
        print(image_url)

        return save_article(
            content_type=self.original_doc.content_type,
            outlet=self.original_doc.outlet,
            category=self.original_doc.category,
            title=title,
            paragraphs=paragraphs,
            image_url=image_url,
            image_credit=image_credit,
            original_document=self.original_doc,
        )
