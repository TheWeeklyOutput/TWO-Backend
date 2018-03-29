import re
from .base import XMLSiteMapCrawler

class CNNCrawler(XMLSiteMapCrawler):
    def get_slug(self, url):
        return url.split('/')[-2]

    def get_category(self, url):
        return url.split('/')[-3]

    def get_content_type(self):
        return 'News'

class CNNMoneyCrawler(CNNCrawler):
    INVALID_CONTENT_PATTERNS = [
        (re.compile(r'Visit\s(.*\..[^\/]{1,5}.[^\s]*).*'), lambda x: x.get_text()),
        (re.compile(r'RELATED:.*'), lambda x: x.get_text()),
        (re.compile(r'READ:.*'), lambda x: x.get_text())
    ]

    def get_outlet(self):
        return 'CNN Money'

    def get_sitemaps(self, date):
        sitemap = 'http://money.cnn.com/registry/sitemaps/articles/'
        sitemap += date.strftime("%Y") + '.xml'
        return [sitemap]

    def extract_title(self, soup):
        head = soup.find('head', rel='article')
        title = head.find('meta', {'name': 'title'})
        return title.get('content', False)

    def extract_author(self, soup):
        head = soup.find('head', rel='article')
        author = head.find('meta', {'name': 'author'})
        return author.get('content', False)
    
    def extract_date(self, soup):
        head = soup.find('head', rel='article')
        date = head.find('meta', {'name': 'date'})
        return date.get('content', False)
    
    def extract_description(self, soup):
        head = soup.find('head', rel='article')
        title = head.find('meta', {'name': 'description'})
        return title.get('content', False)

    def extract_content(self, soup):
        article = soup.find('article')
        paragraphs = [h for h in article.find_all('h2', class_='speakable')]
        paragraphs += [p for p in article.find_all('p') if not p.find(class_='inStoryHeading')]
        return paragraphs

class EditionCNNCrawler(CNNCrawler):
    INVALID_CONTENT_PATTERNS = [
        (re.compile(r'Visit\s(.*\..[^\/]{1,5}.[^\s]*).*'), lambda x: x.get_text()),
        (re.compile(r'RELATED:.*'), lambda x: x.get_text())
    ]

    def get_outlet(self):
        return 'Edition CNN'

    def get_sitemaps(self, date):
        sitemap = 'http://edition.cnn.com/sitemaps/sitemap-articles-'
        sitemap += date.strftime("%Y-%m") + '.xml'
        return [sitemap]

    def extract_title(self, soup):
        article = soup.find('article')
        meta = article.find('meta', itemprop='headline')
        if meta.get('content', False):
            title_parts = meta.get('content').split('-')
            title_parts.pop(len(title_parts)-1)
            return '-'.join(title_parts).strip()
        return False

    def extract_author(self, soup):
        meta = soup.find('meta', itemprop='author')
        if meta.get('content', False):
            return meta.get('content').replace(', CNN', '').replace(', for CNN', '')
        return False

    def extract_date(self, soup):
        meta = soup.find('meta', itemprop='datePublished')
        return meta.get('content', False)
    
    def extract_description(self, soup):
        meta = soup.find('meta', itemprop='description')
        return meta.get('content', False)

    def extract_content(self, soup):
        article = soup.find('article')
        paragraphs = article.find_all('div', class_='zn-body__paragraph')
        paragraphs += article.select('.zn-body__paragraph.speakable')
        return paragraphs
