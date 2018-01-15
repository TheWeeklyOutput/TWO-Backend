
from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin
from backend.generator import urls as generator_urls

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^generator/', include(generator_urls)),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns.append(url(r'^__debug__/', include(debug_toolbar.urls)))
