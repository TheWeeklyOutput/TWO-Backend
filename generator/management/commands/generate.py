from django.core.management.base import BaseCommand, CommandError
from backend.generator.combinator import Combinator

class Command(BaseCommand):
    help = 'Generates an article'

    def add_arguments(self, parser):
        parser.add_argument('--category', nargs=1, type=str, default=['politics'])
        parser.add_argument('--outlet', nargs=1, type=str, default=['cnn'])
        parser.add_argument('--content-type', nargs=1, type=str, default=['news'])

    def handle(self, *args, **options):
        for category, outlet, content_type in zip(options['category'], options['outlet'], options['content_type']):
            self.stdout.write('Generating new text:')
            self.stdout.write('Category: {0} \nOutlet: {1} \nContent Type: {2}'.format(category, outlet, content_type))
            combinator = Combinator(category=category, outlet=outlet, content_type=content_type)
            combinator.generate()
            combinator.save()
