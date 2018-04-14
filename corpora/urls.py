from django.conf.urls import url
from .views import GetByCategory, GetBySlug, GetMetadataBySlug, GetCategories

urlpatterns = [
    url(r'^categories', GetCategories.as_view()),
    url(r'^slug/(?P<slug>.[^\/]*)/meta/', GetMetadataBySlug.as_view(), name='document_meta_slug'),
    url(r'^slug/(?P<slug>.[^\/]*)/', GetBySlug.as_view(), name='document_slug'),
    url(r'^(?P<category>.[^\/]*)/(?P<page>\d+)/', GetByCategory.as_view()),
]
