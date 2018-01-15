import os 
import requests
import gzip
import io
from xml.etree import ElementTree
from queue import Queue
from threading import Thread
from backend.generator.corpora import save_corpus

class HTMLCrawler:
    html_parser = None

    def __init__(self):
        self.url_queue = Queue(maxsize=0)
        self.result_queue = Queue(maxsize=0)

    def get_urls(self, date):
        return NotImplementedError('Must be overridden by master class')

    def get_slug(self, url):
        return NotImplementedError('Must be overridden by master class')

    def get_content_type(self):
        return NotImplementedError('Must be overridden by master class')

    def get_category(self, url):
        return NotImplementedError('Must be overridden by master class')

    def get_outlet(self):
        return NotImplementedError('Must be overridden by master class')

    def queue_urls(self):
        for url in self.urls:
            self.url_queue.put(url)

    def crawl(self, date):
        for url in self.get_urls(date):
            response = requests.get(url)
            try:
                self.html_parser.feed(response.text)
                content = self.html_parser.get_content()
                headline = self.html_parser.headline

            except:
                print('Malformed HTML:', url)
                return

            save_corpus(
                content=content,
                headline=headline,
                content_type=self.get_content_type(),
                outlet=self.get_outlet(),
                category=self.get_category(url),
                original_slug=self.get_slug(url),
                original_url=url
            )


class XMLSiteMapCrawler(HTMLCrawler):
    def get_sitemaps(self):
        return NotImplementedError('Must be overridden by master class')

    def get_url_from_element(self, url):
        return url[0].text

    def get_urls(self, date):
        urls = []
        for sm in self.get_sitemaps(date):
            response = requests.get(sm)
            res = response.content

            if sm.endswith('.gz'):
                res = gzip.decompress(res)
            
            urlset = ElementTree.fromstring(res)
            for url in urlset:
                url = self.get_url_from_element(url)
                urls.append(url)
        return urls
