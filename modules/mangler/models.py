from django.db import models
import uuid

class Sentiment(models.Model):
    score = models.FloatField(blank=True, null=True)
    magnitude = models.FloatField(blank=True, null=True)

    def __str__(self):
        return ' : '.join([str(self.score), str(self.magnitude)])

class Document(models.Model):
    sentiment = models.ForeignKey(Sentiment, blank=True, null=True)

    generated = models.BooleanField(default=False)
    slug = models.CharField(max_length=100, default=uuid.uuid4(), unique=True)
    content_type = models.CharField(max_length=20, default="generic")
    category = models.CharField(max_length=20, default="generic")
    outlet = models.CharField(max_length=20, default="generic")

    @property
    def url(self):
        return '/documents/slug/'+'/'.join([self.slug])

    def __str__(self):
        return self.slug

class Sentence(models.Model):
    document = models.ForeignKey(Document)
    sentiment = models.ForeignKey(Sentiment, blank=True, null=True)

    token_offset = models.IntegerField()
    document_index = models.IntegerField()
    content = models.CharField(max_length=2000)
    begin = models.IntegerField()

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

    name = models.CharField(max_length=100)
    entity_type = models.CharField(max_length=20)
    salience = models.FloatField(null=True)

    def __str__(self):
        return self.entity_type + ' : ' + self.name

class TextSpan(models.Model):
    content = models.CharField(max_length=200)
    begin_offset = models.IntegerField()

    def __str__(self):
        return str(self.begin_offset) + ' : ' + self.content

class Mention(models.Model):
    text = models.OneToOneField(TextSpan, related_name='mention')
    entity = models.ForeignKey(Entity)
    mention_type = models.CharField(max_length=20)

class Token(models.Model):
    part_of_speech = models.ForeignKey(PartOfSpeech)
    lemma = models.CharField(max_length=100)

    text = models.CharField(max_length=100)
    text_begin = models.IntegerField()

    document = models.ForeignKey(Document)
    sentence = models.ForeignKey(Sentence)
    mention = models.ForeignKey(Mention, blank=True, null=True)

    document_index = models.IntegerField()
    sentence_index = models.IntegerField()

    edge_label = models.CharField(max_length=20)
    edge_index = models.IntegerField()

    def __str__(self):
        return self.text_content
