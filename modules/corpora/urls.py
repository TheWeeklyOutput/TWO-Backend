from django.conf.urls import url, include
from .views import AddCorpus, GetCorpus

urlpatterns = [
    url(r'^add/', AddCorpus.as_view()),
    url(r'^get/(?P<slug>.[^\/]*)', GetCorpus.as_view())

]