from django.conf import settings
from django.views.static import serve
from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.sitemaps import views as sitemap_views
from django.views.decorators.cache import cache_page
from .sitemaps import GeneratedDocumentSitemap

sitemaps = {
    'articles': GeneratedDocumentSitemap,
}

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^corpora/', include('backend.corpora.urls')),

    url(r'sitemap.xml',
         cache_page(86400)(sitemap_views.index),
         {'sitemaps': sitemaps, 'sitemap_url_name': 'sitemaps'}),
    url(r'sitemap-(?P<section>.[^\/]*).xml',
         cache_page(86400)(sitemap_views.sitemap),
         {'sitemaps': sitemaps}, name='sitemaps'),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns.append(url(r'^__debug__/', include(debug_toolbar.urls)))

    urlpatterns += [
        url(r'^media/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
        url(r'^static/(?P<path>.*)$', serve, {
            'document_root': settings.STATIC_ROOT,
        }),
    ]
