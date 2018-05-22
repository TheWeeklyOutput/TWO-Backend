import os
import random
from django.conf import settings
from django.template import loader, Context

class LayoutDesigner:
    def random_layout(self, documents):
        html = random.choice(self.templates())
        layout = self.render_layout(html, documents[:10])
        return layout

    def all_layouts(self, documents):
        for i, html in enumerate(self.templates()):
          documents = documents.order_by('?')
          yield (self.render_layout(html, documents), documents)

    def render_layout(self, path, documents):
        t = loader.get_template("pdf/" + path)
        rendered = t.render({ 'documents': documents })
        return rendered

    def templates(self,
                  # css_dir=settings.PDF_TEMPLATES_HTML,
                  html_dir=settings.PDF_TEMPLATES_HTML,
                  size=''):

        html = [h for h in os.listdir(html_dir) \
                if os.path.isfile(os.path.join(html_dir, h))]
        #css = [h for h in os.listdir(css_dir) \
        #          if os.path.isfile(os.path.join(css_dir, h))]

        return sorted(html)
