import spacy
from backend.modules.mangler.models import Document, Sentence, Token, Mention, Entity, PartOfSpeech

class Analyser:
    def __init__(self):
        self.nlp = spacy.load('en', create_pipeline=self.custom_pipeline)

    def custom_pipeline(self, nlp):
        return (self.nlp.tagger, self.nlp.parser, self.nlp.entity)

    def add_text(self, text, **kwargs):
        self.save_analysed_text(self.analyse_text(text), **kwargs)

    def analyse_text(self, text):
        return self.nlp(text)

    def save_analysed_text(self, analysed_text, **kwargs):
        document = self.save_document(analysed_text, **kwargs)
        offset = 0
        for index, sentence in enumerate(analysed_text.sents):
            self.save_sentence(sentence, document, index, offset)
            offset += len(sentence)
        
        for index, entity in enumerate(analysed_text.ents):
            self.save_entity(entity, document)

    def save_document(self, analysed_text, slug=None, content_type=None, 
                        category=None, outlet=None, generated=None):
    
        doc, created = Document.objects.get_or_create(
            slug=slug,
            content_type=content_type,
            category=category,
            outlet=outlet,
            generated=generated
        )

    def save_sentence(self, sentence, document, index, offset):
        sentence, created = Sentence.objects.get_or_create(
            document=document, document_index=index,
            token_offset=offset, content=sentence.text,
            begin=sentence.start
        )

        sentence_index = 0
        for token in sentence:
            self.save_token(token, document, sentence, index, sentence_index)
            index += 1
            sentence_index += 1
        
    def save_token(self, token, document, sentence, index, sentence_index ):
        pos, created, = PartOfSpeech.objects.get_or_create(
            tag=token.tag, pos=token.pos
        )
        tok, created = Token.objects.get_or_create(
            part_of_speech=pos,
            document=document, sentence=sentence,
            document_index=index, sentence_index=sentence_index, 
            lemma=token.lemma, text=token.text, text_begin=token.idx
        )
    
    def save_entity(self, entity, document):
        # needs to be reworked to search knowledge
        # and combine entities which are the same

        metadata, created = Entity.objects.get_or_create(
            wikipedia_url="", mid=""
        )
        
        name = entity.text
        entity, created = Entity.objects.get_or_create(
            name=name, meta=metadata, 
            entity_type=entity.label, 
        )
        entity.documents.add(document)

        mention, created = Mention.object.get_or_create(
            text=entity.text, mention_type=""
        )