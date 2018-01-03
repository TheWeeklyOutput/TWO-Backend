
from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
import backend.corpora.urls as corpora_urls 
import backend.mangler.urls as mangler_urls

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^corpora/', include(corpora_urls)),
    url(r'^mangler/', include(mangler_urls))
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns.append(url(r'^__debug__/', include(debug_toolbar.urls)))
