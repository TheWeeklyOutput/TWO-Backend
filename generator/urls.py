from django.conf.urls import url
from .views import GetAll, GetHighlights, GetByCategory

urlpatterns = [
    url(r'^highlights', GetHighlights.as_view()),
    url(r'^all/<int:page>/', GetAll.as_view()),
    url(r'^(?P<category>.[^\/]*)/<int:page>/', GetByCategory.as_view()),
]
