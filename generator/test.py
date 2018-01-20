from .wrappers import Document, Entity
from .store import EntityStore
from backend.corpora.manager import load_corpora
from backend.knowledge.wikidata import image_search

def test(category):
    docs = load_corpora(
        random=True,
        generated=False,
        content_type='news',
        outlet='cnn',
        category=category
    )

    orginal_doc = docs.first()
    base_doc = Document.from_repr(orginal_doc.annotations)

    entity_store = EntityStore()
    for doc in docs:
        doc = Document.from_repr(doc.annotations)
        for entity in doc.entities:
            entity = Entity.from_repr(entity, doc)
            entity_store.add(entity)

    for i, entity in enumerate(base_doc.entities):
        entity = entity_store.map_similar(entity)
        base_doc.entities[i] = entity

    base_doc.rebuild()
    title, content = base_doc.to_content()
    print("Original Title: " + orginal_doc.title)
    print(title)
    print(content)

    for sentence in base_doc.sentences:
        for mention in sentence.mentions:
            image_url, image_credit = image_search(mention.text)
            if image_url:
                print(image_url)
                break

    '''
    save_corpus(
        generated=True,
        content_type='news',
        outlet='cnn',
        category=category,
        title=title,
        content=content,
        image_url=image_url,
        image_credit=image_credit,
        original_document=orginal_doc,
        annotations=base_doc
    )
    '''
