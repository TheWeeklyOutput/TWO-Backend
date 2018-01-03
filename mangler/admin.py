from django.contrib import admin
from super_inlines.admin import SuperInlineModelAdmin, SuperModelAdmin

from .models import Sentiment, Document, Sentence, PartOfSpeech, Token, EntityMetadata, Entity, TextSpan, Mention


class SentimentInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Sentiment
    max_num = 0

class PartOfSpeechInline(SuperInlineModelAdmin, admin.StackedInline):
    model = PartOfSpeech
    max_num = 0

class TokenInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Token
    max_num = 0
    fields = ('part_of_speech', 'mention')

class SentenceInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Sentence
    inlines = (TokenInline, )
    max_num = 0

class EntityMetadataInline(SuperInlineModelAdmin, admin.StackedInline):
    model = EntityMetadata
    max_num = 0

class TextSpanInline(SuperInlineModelAdmin, admin.StackedInline):
    model = TextSpan
    max_num = 0
    fields = ('content', 'begin')

class MentionInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Mention
    max_num = 0
    fields = ('text', 'mention_type')

class EntityInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Entity
    max_num = 0
    fields = ('meta', )
    #inlines = (MentionInline, DocumentInline, SentimentInline)


class DocumentInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Document
    max_num = 0
    fields = ('sentiment', 'slug')
    #inlines = (SentenceInline, TokenInline)

class MetaAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(MetaAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(MetaAdmin, self).change_view(*args, **kwargs)

class MentionAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(MentionAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(MentionAdmin, self).change_view(*args, **kwargs)

class EntityAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(EntityAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = [MentionInline]
        return super(EntityAdmin, self).change_view(*args, **kwargs)

class DocumentAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(DocumentAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = [SentenceInline, TokenInline]
        return super(DocumentAdmin, self).change_view(*args, **kwargs)

admin.site.register(Document, DocumentAdmin)
admin.site.register(Entity, EntityAdmin)
admin.site.register(Mention, MentionAdmin)
admin.site.register(EntityMetadata, MetaAdmin)
