from datetime.datetime import now
from .siteparsers import BaseParser
from .sitecrawlers import XMLSiteMapCrawler

class CNNParser(BaseParser):
    def check_content(self, tag, attrs):
        useful = False
        headline = False
        for type, value in attrs:
            if value:
                headline = headline or value.startswith('pg-headline')
                useful = useful or value.startswith('zn-body__paragraph')
        return useful, headline

    def get_string(self):
        data = [d for d in self.get_data() if len(d) > 1]
        return '\n'.join(data)

class CNNCrawler(XMLSiteMapCrawler):
    html_parser = CNNParser()

    def get_sitemaps(self):
        return [
            'http://edition.cnn.com/sitemaps/sitemap-articles-2017-08.xml',
            'http://edition.cnn.com/sitemaps/sitemap-articles-2017-07.xml',
            'http://edition.cnn.com/sitemaps/sitemap-articles-2017-06.xml',
            'http://edition.cnn.com/sitemaps/sitemap-articles-2017-05.xml',
            'http://edition.cnn.com/sitemaps/sitemap-articles-2017-04.xml',
            'http://edition.cnn.com/sitemaps/sitemap-articles-2017-03.xml',
            'http://edition.cnn.com/sitemaps/sitemap-articles-2017-02.xml',
            'http://edition.cnn.com/sitemaps/sitemap-articles-2017-01.xml',
            'http://money.cnn.com/registry/sitemaps/articles/2018.xml'
        ]
        """
        edition_sitemap = 'http://edition.cnn.com/sitemaps/sitemap-articles-'
        edition_sitemap += now().strftime("%Y-%m") + '.xml'
        money_sitemap = 'http://money.cnn.com/registry/sitemaps/articles/'
        money_sitemap = now().strftime("%Y") + '.xml'

        return [edition_sitemap, money_sitemap]
        """

    def get_slug(self, url):
        return url.split('/')[-2]

    def get_category(self, url):
        return url.split('/')[-3]

    def get_outlet(self):
        return 'cnn'