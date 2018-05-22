import random
from copy import copy
from django.utils import timezone
from django.core.exceptions import EmptyResultSet
from backend.corpora.manager import load_corpora, save_generated_document, fake_corpus
from backend.knowledge.finder import Finder
from google.cloud import language
from .detokenizer import Detokenizer
from .document import Document
from .store import EntityStore
from tqdm import tqdm

class Combinator:
    def __init__(self, fake_link=False, **kwargs):
        self.generation_args = kwargs
        self.docs = self.load_documents(**kwargs)
        self.fake_link = fake_link

        self.finder = Finder()
        self.detokenizer = Detokenizer()
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
        docs = []
        for doc in progress:
          progress.set_postfix(error='')
          doc = Document.from_repr(doc.xml)
          if doc is None:
            progress.set_postfix(error='Corpus XML Missing')
            continue

          docs.append(doc)

        self.entity_store.add_docs(docs)

    def map_entities(self):
        progress = tqdm(self.base_doc.entities, desc='Mapping Entities')
        for i, entity in enumerate(progress):
            progress.set_description('Mapping: {0}'.format(entity.name))
            entity = self.entity_store.map_similar(entity)
            self.base_doc.entities[i] = entity

    def generate(self):
        docs_list = list(self.docs)
        random.shuffle(docs_list)

        self.original_corpus = docs_list[0]
        print('Generating new Document from: ' + self.original_corpus.title)
        self.base_doc = Document.from_repr(self.original_corpus.xml)
        self.map_entities()

    def report(self, original, generated):
        print(
            '\n'
            '-------------------------------------------------- \n'
            ' Original Title: {0} \n'
            'Generated Title: {1} \n\n'
            ' Original Description: \n{2} \n'
            'Generated Description: \n{3} \n\n'
            'Content: \n'
            '{4} \n\n'
            'Image: {5} \n'
            '-------------------------------------------------- \n'
            .format(original.title, generated.title, original.description,
                    generated.description, generated.html_content, generated.image_url)
        )

    def save(self, original, title, description, content, text, image_data):
        image_url, image_credit = image_data
        return save_generated_document(
            'Annotation saving disabled',
            html_content=content,
            text_content=text,
            title=title,
            description=description,
            date=timezone.now(),
            content_type=original.content_type,
            outlet=original.outlet,
            category=original.category,
            image_url=image_url,
            image_credit=image_credit,
            original_corpus=fake_corpus() if self.fake_link else original,
        )

    def finalize(self):
        self.detokenizer.detokenize_document(self.base_doc)
        title, description, content_soup, text = self.detokenizer.get_data()

        content_soup = self.finder.populate_anchors(content_soup)
        image_data = self.finder.get_document_image(self.base_doc)

        document = self.save(
            self.original_corpus,
            title,
            description,
            content_soup.prettify().strip(),
            text,
            image_data
        )
        self.report(self.original_corpus, document)
        return document
