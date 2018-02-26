from django.contrib import admin
from super_inlines.admin import SuperInlineModelAdmin, SuperModelAdmin
from .models import Document, Category, ContentType, Outlet, Article

class CategoryInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Category
    max_num = 0
    fields = ('name', 'slug')

class OutletInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Outlet
    max_num = 0
    fields = ('name', 'slug', 'website')


class ContentTypeInline(SuperInlineModelAdmin, admin.StackedInline):
    model = ContentType
    max_num = 0
    fields = ('name', 'slug')

class DocumentInline(SuperInlineModelAdmin, admin.StackedInline):
    model = Document
    max_num = 0
    fields = ('headline', 'slug', 'content')
    #inlines = (SentenceInline, TokenInline)

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

class CategoryAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(CategoryAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(CategoryAdmin, self).change_view(*args, **kwargs)


class DocumentAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(DocumentAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(DocumentAdmin, self).change_view(*args, **kwargs)

class ArticleAdmin(SuperModelAdmin):
    def add_view(self, *args, **kwargs):
        self.inlines = []
        return super(ArticleAdmin, self).add_view(*args, **kwargs)

    def change_view(self, *args, **kwargs):
        self.inlines = []
        return super(ArticleAdmin, self).change_view(*args, **kwargs)

admin.site.register(Article, ArticleAdmin)
admin.site.register(Document, DocumentAdmin)
admin.site.register(Outlet, OutletAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(ContentType, ContentTypeAdmin)
