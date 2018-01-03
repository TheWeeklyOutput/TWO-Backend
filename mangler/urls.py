from django.conf.urls import url, include
from .views import Generate

urlpatterns = [
    url(r'^generate/(?P<category>.[^\/]*)', Generate.as_view())
]