import spacy
import random
import re
from backend.mangler.models import *

class Analyser:
    def __init__(self):
        self.nlp = spacy.load('en')

    def add_text(self, text, **kwargs):
        self.save_analysed_text(self.analyse_text(text), **kwargs)

    def analyse_text(self, text):
        return self.nlp(text)

    def save_analysed_text(self, analysed_text, headline=None, **kwargs):
        analysed_headline = list(self.analyse_text(headline).sents)[0]
        headline = self.save_sentence(analysed_headline, None, -1, -1)
        print(headline.content)
        document, created = self.save_document(analysed_text, headline=headline, **kwargs)

        if not created:
            print('Document already Exists')
            return

        offset = 0
        for index, sentence in enumerate(analysed_text.sents):
            self.save_sentence(sentence, document, index, offset)
            offset += len(sentence)

        for index, entity in enumerate(analysed_text.ents):
            self.save_entity(entity, document)
        
        print('Document Saved: ' + document.slug)

    def save_document(self, analysed_text, content_type=None, headline=None,
                        category=None, outlet=None, generated=None):

        doc, created = Document.objects.get_or_create(
            headline=headline,
            content_type=content_type,
            category=category,
            outlet=outlet,
            generated=generated
        )

        return doc, created

    def save_sentence(self, sentence, document, index, offset):
        db_sentence = Sentence.objects.create(
            document=document, document_index=index,
            token_offset=offset,
            begin=sentence.start
        )
        print(sentence.text)

        sentence_index = 0
        token_index = offset
        for token in sentence:
            self.save_token(token, document, db_sentence, token_index, sentence_index)
            token_index += 1
            sentence_index += 1
        return db_sentence
        
    def save_token(self, token, document, sentence, index, sentence_index):
        pos, created, = PartOfSpeech.objects.get_or_create(
            tag=token.tag_, pos=token.pos_
        )
        tok, created = Token.objects.get_or_create(
            part_of_speech=pos, edge_index=token.head.i,
            document=document, sentence=sentence,
            document_index=index, sentence_index=sentence_index,
            lemma=token.lemma, text=token.text, text_begin=token.idx,
            vector=token.vector, ent_iob=token.ent_iob_
        )

    def save_entity(self, entity, document):
        # needs to be reworked to search knowledge

        metadata, created = EntityMetadata.objects.get_or_create(
            wikipedia_url="", mid=""
        )

        db_entity = self.match_entity(entity, metadata)
        db_entity.documents.add(document)

        text = TextSpan.objects.create(
            content=entity.text, begin_offset=entity.start,
            vector=entity.vector
        )

        mention, created = Mention.objects.get_or_create(
            text=text, mention_type="", entity=db_entity
        )

    def match_entity(self, entity, metadata):
        mention_text = entity.text

        similar_contains = Entity.objects.filter(name__icontains=mention_text)
        similar_in = Entity.objects.filter(name__in=mention_text)

        similar = list(similar_contains) + list(similar_in)

        similar_count = len(similar)
        if similar_count > 0:
           for s in similar:
                words = s.name.split(' ')
                mention_words = mention_text.split(' ')

                for w in words:
                    for mw in mention_words:
                        if mw.lower() == w.lower():
                            return s

        name = self.clean_entity_name(mention_text)
        db_entity, created = Entity.objects.get_or_create(
            name=name, meta=metadata,
            entity_type=entity.label_,
        )
        return db_entity

    def clean_entity_name(self, mention_text):
        return mention_text.replace('\'s', '')
