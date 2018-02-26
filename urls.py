
from django.conf import settings
from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^corpora/', include('backend.corpora.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns.append(url(r'^__debug__/', include(debug_toolbar.urls)))

    from django.contrib.staticfiles.views import serve
    urlpatterns.append(url(r'^$', serve, kwargs={'path': 'index.html', 'document_root': settings.STATIC_ROOT}))
