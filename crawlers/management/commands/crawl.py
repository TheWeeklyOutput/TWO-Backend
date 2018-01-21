from datetime import datetime
from django.core.management.base import BaseCommand, CommandError
from backend.crawlers.cnn import CNNCrawler
from datetime import datetime

class Command(BaseCommand):
    help = 'Crawls newest articles'
    crawlers = [CNNCrawler()]

    def add_arguments(self, parser):
        parser.add_argument('--date', nargs=1, type=str, default=datetime.now)

    def handle(self, *args, **options):
        date = datetime.strptime(options['date'][0], '%Y-%m')
        for crawler in self.crawlers:
            self.stdout.write('Crawling: {0}'.format(crawler.get_outlet()))
            crawler.crawl(date)
