from django.db import models
from picklefield.fields import PickledObjectField

class Document(models.Model):
    headline = models.CharField(max_length=120)
    content = models.TextField()

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