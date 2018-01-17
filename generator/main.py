from backend.corpora.manager import load_corpora, save_corpus
from .scaffold import Context, DocumentScaffold
from backend.knowledge.wikidata import image_search
import random

def ent_meta(e):
    return (e.entity_type, round(e.salience, 1))

def pos_meta(pos):
    return (pos.tag, pos.case, pos.form, pos.gender,
            pos.number,pos.person, pos.tense, pos.aspect, pos.reciprocity, 
            pos.mood, pos.tense, pos.proper, pos.voice)

def token_meta(t):
    return (t.edge_label, pos_meta(t.part_of_speech))

def mention_meta(m):
    tok_k = token_meta(m.token)
    edg_k = token_meta(m.edge)
    root_k = token_meta(m.root)
    return (tok_k, edg_k, root_k)

def main(category):
    docs = load_corpora(
        random=True,
        generated=False,
        content_type='news',
        outlet='cnn',
        category=category
    )

    chosen_doc = docs.first()
    chosen_scaffold = DocumentScaffold.from_document(chosen_doc.annotations)
    docs = [doc.annotations for doc in docs]

    scaffolds = []
    for doc in docs:
        scaffolds.append(DocumentScaffold.from_document(doc))

    mentions = {} # mention type table
    for s in scaffolds:
        for e in s.context.entities:
            for m in e.mentions:
                if ent_meta(e) not in mentions.keys():
                    mentions[ent_meta(e)] = []
                m.entity = e
                mentions[ent_meta(e)].append(m)

    for i, e in enumerate(chosen_scaffold.context.entities):
        for j, m in enumerate(e.mentions):
            print()

            candidates = []
            print('---', m.text.content)

            for ms in mentions[ent_meta(e)]:
                if ms.mapped and m.mapped:
                    if mention_meta(ms) == mention_meta(m):
                        if m.text.content.lower() != ms.text.content.lower():
                            print(ms.text.content)
                            candidates.append(ms)
            if len(candidates) > 0:
                choice = random.choice(candidates)
                e.mentions[j].replace_token = choice.token
                e.mentions[j].replace_edge = choice.edge
                e.mentions[j].replace_root = choice.root
            else:
                print(e.name)
                print(':(')
        chosen_scaffold.context.entities[i] = e

    chosen_scaffold.fill_with_context(chosen_scaffold.context)
    headline, content, entities, sents = chosen_scaffold.to_content()
    print(headline)
    print(content)

    image_url = None
    for entity in entities:
        image_url = image_search(entity.name)
        if image_url is not None:
            print(image_url)
            break

    save_corpus(
        generated=True,
        content_type='news',
        outlet='cnn',
        category=category,
        headline=headline,
        content=content,
        image_url=image_url,
        original_document=chosen_doc,
        annotations=sents
    )
