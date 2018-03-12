import os 
import gzip
import io
import random
import itertools
import requests
from requests.exceptions import ConnectionError
from dateutil.parser import parse
from tqdm import tqdm
from bs4 import BeautifulSoup
from xml.etree import ElementTree
from queue import Queue
from threading import Thread
from time import sleep
from django.db.utils import IntegrityError
from backend.corpora.manager import save_corpus, corpus_exists, category_active

class HTMLCrawler:
    INVALID_CONTENT_PATTERNS = []

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
    
    def extract_title(self, soup):
        raise NotImplementedError('Must be overridden by master class')

    def extract_author(self, soup):
        raise NotImplementedError('Must be overridden by master class')

    def extract_description(self, soup):
        raise NotImplementedError('Must be overridden by master class')

    def extract_date(self, soup):
        raise NotImplementedError('Must be overridden by master class')

    def extract_content(self, soup):
        raise NotImplementedError('Must be overridden by master class')
    
    def check_content(self, p):
        valid = p is not None and \
                p.string is not None and \
                p.get_text() is not None
    
        for pattern, getter in self.INVALID_CONTENT_PATTERNS:
            if pattern.match(getter(p)):
                valid = False
        return valid

    def substitute_tag_names(self, p):
        for x in p.find_all(True):
                x.attrs = None
                x.name = x.name[:2]
        p.name = 'p'
        p.attrs = None

    def clean_content(self, paragraphs):
        res = []
        for p in paragraphs:
            self.substitute_tag_names(p)
            if self.check_content(p):
                res.append(p)

        if len(res) > 3:
            return res
        return False

    def parse_html(self, string, url):
        try:
            soup = BeautifulSoup(string, 'html.parser')
            content = self.extract_content(soup)
            content = self.clean_content(content)
            return (
                self.extract_title(soup), 
                self.extract_author(soup),
                self.extract_description(soup),
                parse(self.extract_date(soup) + ' +0100'),
                content
            )
        except AttributeError:
            return (False, )

    def request(self, url):
        try:
            response = requests.get(url)
        except ConnectionError as e:
            self.tqdm.set_postfix(error='Connection Reset, retrying in 1s ...')
            sleep(1)
            return self.request(url)
        return response

    def save(self, url, title, author, description, date, content):
        save_corpus(
            content=content,
            url=url,
            title=title,
            author=author,
            description=description,
            date=date,
            content_type=self.get_content_type(),
            outlet=self.get_outlet(),
            category=self.get_category(url),
            slug=self.get_slug(url)
        )

    def get_filtered_urls(self, date, amount_per_category):
        urls = self.get_urls(date)
        random.shuffle(urls)

        self.tqdm = tqdm(urls)
        self.tqdm.set_description('Filtering URls')
        self.tqdm.set_postfix(error='')
        active_urls = {}

        for url in self.tqdm:
            self.tqdm.set_postfix(error='')

            if corpus_exists(url):
                self.tqdm.set_postfix(error='Corpus Already Exists')
                continue

            category = self.get_category(url)
            if not category_active(category):
                self.tqdm.set_postfix(error='Category Not Active')
                continue

            category_urls = active_urls.get(category, False)
            if category_urls:
                if len(category_urls) < amount_per_category:
                    active_urls[category].append(url)
                else:
                    self.tqdm.set_postfix(error='No further URls needed for category')
            else:
                active_urls[category] = [url]
        self.tqdm.close()
        return itertools.chain.from_iterable(active_urls.values())

    def crawl(self, date, amount_per_category):
        self.tqdm = tqdm(self.get_filtered_urls(date, amount_per_category))

        for url in self.tqdm:
            self.tqdm.set_description(self.get_slug(url))
            self.tqdm.set_postfix(error='')

            response = self.request(url)
            data = self.parse_html(response.text, url)
            if all(data):
                self.save(url, *data)
            else: 
                self.tqdm.set_postfix(error='No Content')
        self.tqdm.close()


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
