from backend.corpora.manager import load_corpora
from .wrappers import Document
from .store import EntityStore

class Combinator: 
    def __init__(self, **kwargs):
        self.generation_args = kwargs
        self.docs = self.load_documents(**kwargs)
        self.original_doc = self.docs.first()

        self.base_doc = Document.from_repr(self.original_doc.annotations)
        self.entity_store = EntityStore()
        self.fill_store()

    def load_documents(self, **kwargs):
        return load_corpora(
            random=True,
            generated=False,
            **kwargs
        )

    def fill_store(self):
        docs = [Document.from_repr(doc.annotations) for doc in self.docs]
        self.entity_store.add_docs(docs)

    def map_entities(self):
        for i, entity in enumerate(self.base_doc.entities):
            entity = self.entity_store.map_similar(entity)
            self.base_doc.entities[i] = entity

    def generate(self):
        self.map_entities()

    def save(self):
        title, content, image_data = self.base_doc.to_content()
        image_url, image_credit = image_data

        print('Original: ' + self.original_doc.title)
        print(title)
        print(content)
        print(image_url)
        '''
        return save_corpus(
            generated=True,
            **self.generation_args,
            title=title,
            content=content,
            image_url=image_url,
            image_credit=image_credit,
            original_document=self.orginal_doc,
            annotations=self.base_doc
        )
        '''
