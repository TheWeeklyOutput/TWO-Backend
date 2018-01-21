import os 
import requests
import gzip
import io
from tqdm import tqdm
from xml.etree import ElementTree
from queue import Queue
from threading import Thread
from time import sleep
from django.db.utils import IntegrityError
from backend.corpora.manager import save_corpus, corpus_exists

class HTMLCrawler:
    html_parser = None

    def __init__(self):
        self.tqdm = None

    def get_urls(self, date):
        raise NotImplementedError('Must be overridden by master class')

    def get_slug(self, url):
        raise NotImplementedError('Must be overridden by master class')

    def get_content_type(self):
        raise NotImplementedError('Must be overridden by master class')

    def get_category(self, url):
        raise NotImplementedError('Must be overridden by master class')

    def get_outlet(self):
        raise NotImplementedError('Must be overridden by master class')

    def queue_urls(self):
        for url in self.urls:
            self.url_queue.put(url)

    def parse_html(self, string, url):
        try:
            self.html_parser.feed(string)
            content = self.html_parser.get_content()
            title = self.html_parser.headline
            return title, content
        except ValueError as e:
            self.tqdm.set_postfix(error='{0}'.format(e))
        except Exception as e:
            self.tqdm.set_postfix(error='{0}'.format(e))
        return False, False

    def request(self, url):
        try:
            response = requests.get(url)
        except ConnectionResetError as e:
            self.tqdm.set_postfix(error='Connection Reset, retrying in 1s ...')
            sleep(1)
            return self.request(url)
        return response

    def save(self, title, content, url):
        try:
            save_corpus(
                content=content,
                title=title,
                content_type=self.get_content_type(),
                outlet=self.get_outlet(),
                category=self.get_category(url),
                original_slug=self.get_slug(url),
                original_url=url
            )
        except Exception as e:
            self.tqdm.set_postfix(error='{0}'.format(e))

    def crawl(self, date):
        self.tqdm = tqdm(self.get_urls(date))
        for url in self.tqdm:
            self.tqdm.set_description(self.get_slug(url))
            self.tqdm.set_postfix(error='')

            if corpus_exists(url):
                self.tqdm.set_postfix(error='Corpus Already Exists')
                continue

            response = self.request(url)
            title, content = self.parse_html(response.text, url)

            if title and content:
                self.save(title, content, url)

class XMLSiteMapCrawler(HTMLCrawler):
    def get_sitemaps(self):
        raise NotImplementedError('Must be overridden by master class')

    def get_url_from_element(self, url):
        return url[0].text

    def get_urls(self, date):
        urls = []
        for sm in self.get_sitemaps(date):
            response = self.request(sm)
            res = response.content

            if sm.endswith('.gz'):
                res = gzip.decompress(res)
   
            urlset = ElementTree.fromstring(res)
            for url in urlset:
                url = self.get_url_from_element(url)
                urls.append(url)
        return urls
