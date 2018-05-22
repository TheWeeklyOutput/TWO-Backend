import os
import random
from django.conf import settings
from django.template import loader, Context

class DocumentQueue:
  def __init__(self, docs):
    self.documents = list(docs)

  @property
  def new(self):
    self.current = self.documents.pop()
    return self.current

class LayoutDesigner:
    def random_layout(self, documents):
        html = random.choice(self.templates())
        layout = self.render_layout(html, documents.order_by('?'))
        return layout

    def all_layouts(self, documents):
        for i, html in enumerate(self.templates()):
          documents = documents.order_by('?')
          yield (self.render_layout(html, documents), documents)

    def render_layout(self, path, documents):
        t = loader.get_template("pdf/" + path)
        rendered = t.render({
          'documents': DocumentQueue(documents),
          'layout': self
        })
        return rendered

    def templates(self,
                  html_dir=settings.PDF_TEMPLATES_HTML,
                  size=''):

        html = [h for h in os.listdir(html_dir) \
                if os.path.isfile(os.path.join(html_dir, h))]
        return sorted(html)

    def random_component(self, _type):
        templates = self.templates(
          html_dir=os.path.join(settings.PDF_TEMPLATES_HTML, "components/" + _type +"/")
        )
        return "pdf/components/{0}/{1}".format(_type, random.choice(templates))

    @property
    def component_18_21(self):
      return self.random_component("18_21")

    @property
    def component_7_21(self):
      return self.random_component("7_21")

    @property
    def component_11_21(self):
      return self.random_component("11_21")
