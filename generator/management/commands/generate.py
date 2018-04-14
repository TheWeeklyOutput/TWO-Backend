from django.core.exceptions import EmptyResultSet
from django.db.utils import IntegrityError
from django.core.management.base import BaseCommand, CommandError
from backend.generator.combinator import Combinator
from backend.corpora.manager import get_active_categories

class Command(BaseCommand):
    help = 'Generates an article'

    def add_arguments(self, parser):
        parser.add_argument('--category', nargs=1, type=str, default=['politics'])
        parser.add_argument('--outlet', nargs=1, type=str, default=['edition-cnn', 'cnn-money'])
        parser.add_argument('--content-type', nargs=1, type=str, default=['news'])
        parser.add_argument('--active-categories', nargs=1, type=bool, default=[False])
        parser.add_argument('--fake-link', nargs=1, type=bool, default=[False])
        parser.add_argument('--amount', nargs=1, type=int, default=[1])

    def handle(self, *args, **options):
        self.stdout.write('Generating new text:')

        if options['active_categories'][0]:
            categories = [c.slug for c in get_active_categories().filter(generateable=True)]
            for category in categories:
                self.generate(options['amount'][0], fake_link=options['fake_link'][0], category=category)

        for category, outlet, content_type in zip(options['category'], options['outlet'], options['content_type']):
            self.generate(options['amount'][0], fake_link=options['fake_link'][0], category=category, outlet=outlet, content_type=content_type)

    def generate(self, amount, **kwargs):
        combinator = Combinator(**kwargs)
        msg = ''
        for k, v in kwargs.items():
            msg += '{}: {} '.format(k, v)
        self.stdout.write(msg)

        for i in range(0, amount):
            self.combinate(combinator)

    def combinate(self, combinator):
        combinator.generate()

        try:
            combinator.finalize()
        except IntegrityError:
            self.stdout.write('Generated Document Not Unique. Retrying ...')
            self.combinate(combinator)
        except AttributeError:
            self.stdout.write('Malformed Document. Retrying ...')
            self.combinate(combinator)
        except Exception as e:
            self.stdout.write('Error: {} Retrying ...'.format(e))
            self.combinate(combinator)
