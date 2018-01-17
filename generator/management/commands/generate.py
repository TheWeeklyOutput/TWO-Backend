from django.core.management.base import BaseCommand, CommandError
from backend.generator.main import main

class Command(BaseCommand):
    help = 'Generates an article'

    def add_arguments(self, parser):
        parser.add_argument('--category', nargs='+', type=str, default='politics')

    def handle(self, *args, **options):
        for category in options['category']:
            print("Generating Category: " + category)
            main(category)
