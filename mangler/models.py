from django.db import models
from picklefield.fields import PickledObjectField
import uuid
import json
import re


class Sentiment(models.Model):
    score = models.FloatField(blank=True, null=True)
    magnitude = models.FloatField(blank=True, null=True)

    def __str__(self):
        return ' : '.join([str(self.score), str(self.magnitude)])

class Document(models.Model):
    sentiment = models.ForeignKey(Sentiment, blank=True, null=True)
    headline = models.OneToOneField("Sentence", related_name="headline")

    generated = models.BooleanField(default=False)

    content_type = models.CharField(max_length=20, default="generic")
    category = models.CharField(max_length=20, default="generic")
    outlet = models.CharField(max_length=20, default="generic")
    date = models.DateTimeField(auto_now_add=True)

    @property
    def url(self):
        return '/documents/slug/' + '/'.join([self.slug])

    @property
    def slug(self):
        string = self.date.strftime("%Y-%m-%d_%H-%M-%S")
        string += ' ' + self.headline.content.lower()
        return '-'.join(re.sub('[^A-Za-z0-9\s\\-_]+', '', string).split(' '))

    def __str__(self):
        return self.slug

class Sentence(models.Model):
    document = models.ForeignKey(Document, null=True)
    sentiment = models.ForeignKey(Sentiment, blank=True, null=True)

    token_offset = models.IntegerField()
    document_index = models.IntegerField()
    begin = models.IntegerField()

    @property
    def content(self):
        tokens = Token.objects.filter(sentence=self)

        content = ''
        for token in tokens:
            if token.part_of_speech.tag != 'POS':
                content += ' '
            content += token.text
        return content[1:]

    def __str__(self):
        return ' : '.join([str(self.begin), self.content])

class PartOfSpeech(models.Model):
    tag = models.CharField(max_length=20)
    pos = models.CharField(max_length=20)

    def __str__(self):
        return ' : '.join([self.pos, self.tag])

class EntityMetadata(models.Model):
    mid = models.CharField(max_length=10, blank=True)
    wikipedia_url = models.CharField(max_length=10, blank=True)

    def __str__(self):
        res = ''
        res += self.mid or 'None'
        res += ' : '
        res += self.wikipedia_url or 'None'

        return res

class Entity(models.Model):
    documents = models.ManyToManyField(Document)
    sentiment = models.ForeignKey(Sentiment, blank=True, null=True)
    meta = models.ForeignKey(EntityMetadata)

    generated = models.BooleanField(default=False)
    name = models.CharField(max_length=100)
    entity_type = models.CharField(max_length=20)
    salience = models.FloatField(null=True)

    def __str__(self):
        return self.entity_type + ' : ' + self.name

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__,
            sort_keys=True, indent=4)

class TextSpan(models.Model):
    content = models.CharField(max_length=200)
    begin_offset = models.IntegerField()
    vector = PickledObjectField()

    def __str__(self):
        return str(self.begin_offset) + ' : ' + self.content

class Mention(models.Model):
    text = models.ForeignKey(TextSpan, related_name='mention')
    entity = models.ForeignKey(Entity)
    mention_type = models.CharField(max_length=20)

    def __str__(self):
        return str(self.entity) + ' : ' + self.text.content

class Token(models.Model):
    part_of_speech = models.ForeignKey(PartOfSpeech)
    lemma = models.CharField(max_length=100)

    text = models.CharField(max_length=100)
    text_begin = models.IntegerField()

    document = models.ForeignKey(Document, null=True)
    sentence = models.ForeignKey(Sentence)
    mention = models.ForeignKey(Mention, blank=True, null=True)

    document_index = models.IntegerField()
    sentence_index = models.IntegerField()

    ent_iob = models.CharField(max_length=2)

    edge_label = models.CharField(max_length=20)
    edge_index = models.IntegerField()

    vector = PickledObjectField()

    def __str__(self):
        return self.text
