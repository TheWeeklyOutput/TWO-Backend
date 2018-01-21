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

    def __str__(self):
        return self.slug

class Document(models.Model):
    content_type = models.ForeignKey(ContentType)
    outlet = models.ForeignKey(Outlet)
    category = models.ForeignKey(Category)
    author = models.ForeignKey(Author, default=1)

    title = models.CharField(max_length=120)
    content = models.TextField()
    annotations = PickledObjectField()
    
    image_url = models.URLField(blank=True)
    image_credit = models.CharField(max_length=200, blank=True, unique=False)

    generated = models.BooleanField(default=False)
    original_document = models.ForeignKey('Document', null=True)
    date = models.DateTimeField(auto_now_add=True)
    slug = models.CharField(max_length=200, blank=True, unique=True)

    original_url = models.URLField(blank=True)
    original_slug = models.CharField(max_length=200, blank=True)

    shares = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        self.slug = self.get_slug()
        super(Document, self).save(*args, **kwargs)

    def get_slug(self):
        if not self.generated:
            return self.original_slug

        res = self.title.lower()
        res = re.sub('[^A-Za-z0-9\s\\-_]+', '', res).split(' ')
        return '-'.join(res)

    def __str__(self):
        res = self.date.strftime('%Y-%m-%d_%H-%M-%S') + ': '

        if self.generated:
            res += 'FAKE: ' 
        
        res += self.title
        return res
