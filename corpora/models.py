from django.db import models
from picklefield.fields import PickledObjectField
import re

class ContentType(models.Model):
    slug = models.CharField(max_length=50)
    name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.slug

class Author(models.Model):
    slug = models.CharField(max_length=50)
    name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.slug

class Outlet(models.Model):
    slug = models.CharField(max_length=50)
    website = models.URLField(blank=True)
    name = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.slug

class Category(models.Model):
    slug = models.CharField(max_length=50)
    name = models.CharField(max_length=50, blank=True, null=True)
    available = models.BooleanField(default=False)
    generateable = models.BooleanField(default=False)

    def __str__(self):
        return self.slug

class Paragraph(models.Model):
    content = models.TextField()
    index = models.IntegerField()

class Article(models.Model):
    content_type = models.ForeignKey(ContentType, on_delete=models.PROTECT)
    outlet = models.ForeignKey(Outlet, on_delete=models.PROTECT)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    author = models.ForeignKey(Author, default=1, on_delete=models.PROTECT)

    slug = models.CharField(max_length=200, blank=True, unique=True)
    title = models.CharField(max_length=200)
    paragraphs = models.ManyToManyField(Paragraph)

    image_url = models.URLField(blank=True)
    image_credit = models.CharField(max_length=200, blank=True, unique=False)

    original_document = models.ForeignKey('Document', null=True, on_delete=models.PROTECT)

    date = models.DateTimeField(auto_now_add=True)
    views = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        self.slug = self.get_slug()
        super(Article, self).save(*args, **kwargs)

    def get_slug(self):
        res = self.title.lower()
        res = re.sub('[^A-Za-z0-9\s\\-_]+', '', res).split(' ')
        return '-'.join(res)

    @property
    def description(self):
        return self.paragraphs.get(index=0).content

    def __str__(self):
        return '[{0}] Views: {1} | {2}'.format(
            self.date.strftime('%Y-%m-%d_%H-%M-%S'),
            self.views,
            self.title
        )

class Document(models.Model):
    content_type = models.ForeignKey(ContentType, on_delete=models.PROTECT)
    outlet = models.ForeignKey(Outlet, on_delete=models.PROTECT)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    author = models.ForeignKey(Author, default=1, on_delete=models.PROTECT)

    title = models.CharField(max_length=200)
    content = models.TextField()
    annotations = PickledObjectField()

    date = models.DateTimeField(auto_now_add=True)
    slug = models.CharField(max_length=200, blank=True, unique=True)
    url = models.URLField(blank=True)

    def save(self, *args, **kwargs):
        self.slug = self.get_slug()
        super(Document, self).save(*args, **kwargs)

    def get_slug(self):
        res = self.title.lower()
        res = re.sub('[^A-Za-z0-9\s\\-_]+', '', res).split(' ')
        return '-'.join(res)

    def __str__(self):
        res = self.date.strftime('%Y-%m-%d_%H-%M-%S') + ': '
        res += self.title
        return res
