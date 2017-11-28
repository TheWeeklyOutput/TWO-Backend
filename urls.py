
from django.conf import settings
from django.conf.urls import url, include
import backend.modules.corpora.urls as corpora_urls 

urlpatterns = [
    url(r'^corpora/', include(corpora_urls))
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns.append(url(r'^__debug__/', include(debug_toolbar.urls)))
