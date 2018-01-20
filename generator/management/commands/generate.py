from django.core.management.base import BaseCommand, CommandError
from backend.generator.combinator import Combinator

class Command(BaseCommand):
    help = 'Generates an article'

    def add_arguments(self, parser):
        parser.add_argument('--category', nargs='+', type=str, default='politics')

    def handle(self, *args, **options):
        for category in options['category']:
            combinator = Combinator(category=category)
            combinator.generate()
            combinator.save()
