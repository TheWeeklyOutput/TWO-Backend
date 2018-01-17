from .baseparsers import BaseParser
from .basecrawlers import XMLSiteMapCrawler

class CNNParser(BaseParser):
    def check_content(self, tag, attrs):
        useful = False
        headline = False
        for type, value in attrs:
            if value:
                headline = headline or value.startswith('pg-headline')
                useful = useful or value.startswith('zn-body__paragraph')
        return useful, headline

    def get_content(self):
        data = [self.headline + ' [] ']
        data += [d for d in self.get_data() if len(d) > 1]
        return '\n'.join(data)

class CNNCrawler(XMLSiteMapCrawler):
    html_parser = CNNParser()

    def get_sitemaps(self, date):
        edition_sitemap = 'http://edition.cnn.com/sitemaps/sitemap-articles-'
        edition_sitemap += date.strftime("%Y-%m") + '.xml'
        money_sitemap = 'http://money.cnn.com/registry/sitemaps/articles/'
        money_sitemap += date.strftime("%Y") + '.xml'

        return [edition_sitemap, money_sitemap]

    def get_slug(self, url):
        return url.split('/')[-2]

    def get_category(self, url):
        return url.split('/')[-3]

    def get_outlet(self):
        return 'cnn'

    def get_content_type(self):
        return 'news'