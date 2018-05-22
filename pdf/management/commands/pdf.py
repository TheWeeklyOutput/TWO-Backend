import os
from django.core.exceptions import EmptyResultSet
from django.db.utils import IntegrityError
from django.core.management.base import BaseCommand, CommandError
from django.conf import settings

from backend.pdf.layout import LayoutDesigner
from backend.pdf.print import print_file
from backend.pdf.wrap import Wrapper
from backend.corpora.manager import get_active_categories, load_generated_documents

class Command(BaseCommand):
    help = 'Generates a pdf of an article'

    def add_arguments(self, parser):
        parser.add_argument('--output-path', nargs=1, type=str, default=[os.path.join(settings.PDF_TEMPLATES_HTML, 'out/')])
        parser.add_argument('--layout',  nargs=1, type=str, default=["all"])
        parser.add_argument('--generate-new', nargs=1, type=bool, default=[False])
        parser.add_argument('--printer', nargs=1, type=str, default=[False])
        parser.add_argument('--amount', nargs=1, type=int, default=[1])

        parser.add_argument('--random', nargs=1, type=bool, default=[False])
        parser.add_argument('--category', nargs=1, type=str, default=[None])
        parser.add_argument('--outlet', nargs=1, type=str, default=[None])
        parser.add_argument('--content-type', nargs=1, type=str, default=[None])
        parser.add_argument('--active-categories', nargs=1, type=bool, default=[False])

    def handle(self, *args, **options):
        self.stdout.write('Generating new pdf:')

        if options.pop('active_categories')[0]:
            categories = [c.slug for c in get_active_categories().filter(generateable=True)]
            for category in categories:
                self.generate(options.pop('amount')[0], category=category)

        for category, outlet, content_type in zip(options['category'], options['outlet'], options['content_type']):
            self.generate(options.pop('amount')[0], **options)

    def generate(self, amount, **kwargs):
        designer = LayoutDesigner()
        msg = ''
        for k, v in kwargs.items():
            msg += '{}: {} \n'.format(k, v)
        self.stdout.write(msg)

        for i in range(0, amount):
            self.design(designer, **kwargs)

    def docs(self, **kwargs):
      return load_generated_documents(
        category=kwargs.pop("category")[0],
        outlet=kwargs.pop("outlet")[0],
        content_type=kwargs.pop("content_type")[0]
      ).order_by('?')

    def design(self, designer, **kwargs):
        layout = kwargs.pop("layout")[0]
        output_path = kwargs.pop("output_path")[0]
        printer = kwargs.pop("printer")[0]
        if layout == "all":
            documents = self.docs(**kwargs)
            for string, documents in designer.all_layouts(documents):
              self.wrap(string, output_path, documents, printer)
        elif layout == "random":
            documents = self.docs(**kwargs)
            string = designer.random_layout(documents)
            self.wrap(string, output_path, documents, printer)

    def wrap(self, string, output_path, docs, printer):
      wrapper = Wrapper()
      pdf_path = output_path + docs[0].slug +".pdf"
      pdf = wrapper.from_string(string, pdf_path)
      if printer:
        print_file(pdf_path, printer=printer)
