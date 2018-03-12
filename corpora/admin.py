from django.contrib import admin
from super_inlines.admin import SuperInlineModelAdmin, SuperModelAdmin
from .models import GeneratedDocument, Corpus, Category, ContentType, Outlet, Author

class OutletInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Outlet
    max_num = 0
    fields = ('name', 'slug', 'website')

class AuthorInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Author
    max_num = 0
    fields = ('name', 'slug', 'generated', 'outlets')
    inlines = (OutletInline, )

class CategoryInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Category
    max_num = 0
    fields = ('name', 'slug', 'aliases', 'available', 'generateable')

class ContentTypeInline(SuperInlineModelAdmin, admin.StackedInline):
    model = ContentType
    max_num = 0
    fields = ('name', 'slug')

class CorpusInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Corpus
    max_num = 0
    fields = ('headline', 'slug', 'content')

class ContentTypeAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(ContentTypeAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(ContentTypeAdmin, self).change_view(*args, **kwargs)

class OutletAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(OutletAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(OutletAdmin, self).change_view(*args, **kwargs)

class AuthorAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(AuthorAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(AuthorAdmin, self).change_view(*args, **kwargs)

class CategoryAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(CategoryAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(CategoryAdmin, self).change_view(*args, **kwargs)

class CorpusAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(CorpusAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(CorpusAdmin, self).change_view(*args, **kwargs)

class GeneratedDocumentAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(GeneratedDocumentAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(GeneratedDocumentAdmin, self).change_view(*args, **kwargs)

admin.site.register(GeneratedDocument, GeneratedDocumentAdmin)
admin.site.register(Corpus, CorpusAdmin)
admin.site.register(Outlet, OutletAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(ContentType, ContentTypeAdmin)
admin.site.register(Author, AuthorAdmin)
