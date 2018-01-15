from django.db import models
from picklefield.fields import PickledObjectField
import re

class ContentType(models.Model):
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
    
    def __str__(self):
        return self.slug


class Document(models.Model):
    content_type = models.ForeignKey(ContentType)
    outlet = models.ForeignKey(Outlet)
    category = models.ForeignKey(Category)

    headline = models.CharField(max_length=120)
    content = models.TextField()
    annotations = PickledObjectField()
    image_url = models.URLField(blank=True)

    generated = models.BooleanField(default=False)
    original_document = models.ForeignKey('Document', null=True)
    date = models.DateTimeField(auto_now_add=True)

    original_url = models.URLField(blank=True)
    original_slug = models.CharField(max_length=200, blank=True)

    likes = models.IntegerField(default=0)

    @property
    def url(self):
        return '/documents/slug/' + '/'.join([self.slug])

    @property
    def slug(self):
        if not self.generated:
            return self.original_slug

        res = self.date.strftime('%Y-%m-%d_%H-%M-%S')
        res += ' ' + self.headline.lower()
        res = re.sub('[^A-Za-z0-9\s\\-_]+', '', res).split(' ')
        return '-'.join(res)

    def __str__(self):
        res = self.date.strftime('%Y-%m-%d_%H-%M-%S') + ': '

        if self.generated:
            res += 'FAKE: ' 
        
        res += self.headline
        return res
