from django.contrib import sitemaps
from django.urls import reverse
from backend.corpora.manager import load_generated_documents

class GeneratedDocumentSitemap(sitemaps.Sitemap):
    priority = 0.5
    changefreq = 'weekly'
    protocol = 'https'

    def items(self):
        return load_generated_documents().order_by('-date')

    def lastmod(self, item):
        return item.date

    def location(self, item):
        return reverse('document_slug', kwargs={'slug': item.slug})
