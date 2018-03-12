from datetime import datetime
from django.core.management.base import BaseCommand, CommandError
from backend.crawlers.cnn import CNNMoneyCrawler, EditionCNNCrawler
from datetime import datetime

class Command(BaseCommand):
    help = 'Crawls newest articles'
    crawlers = [CNNMoneyCrawler(), EditionCNNCrawler()]

    def add_arguments(self, parser):
        parser.add_argument('--date', nargs=1, type=str, default=datetime.now)
        parser.add_argument('--amount-per-category', nargs=1, type=int, default=1000)

    def handle(self, *args, **options):
        date = datetime.strptime(options['date'][0], '%Y-%m')
        for crawler in self.crawlers:
            self.stdout.write('Crawling: {0}'.format(crawler.get_outlet()))
            crawler.crawl(date, options['amount_per_category'][0])
