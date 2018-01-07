import os 
import requests
import gzip
import io
from xml.etree import ElementTree
from queue import Queue
from threading import Thread

class HTMLCrawler:
    html_parser = None

    def __init__(self):
        self.url_queue = Queue(maxsize=0) 
        self.result_queue = Queue(maxsize=0) 
        self.urls = self.get_urls()

    def get_urls(self):
        return NotImplementedError('Must be overridden by master class')

    def get_slug(self, url):
        return NotImplementedError('Must be overridden by master class')

    def get_category(self, url):
        return NotImplementedError('Must be overridden by master class')

    def get_outlet(self):
        return NotImplementedError('Must be overridden by master class')

    def queue_urls(self):
        for url in self.urls:
            self.url_queue.put(url)

    def as_thread(self, number):
        threads = []
        for i in range(0, number):
            threads.append(Thread(target=self.worker, args=(i,)))
        for t in threads:
            t.start()
        print(number, 'Threads started')
        self.queue_urls()
        return t, self.result_queue, self.url_queue
    
    def worker(self, number):
        while True:
            url = self.url_queue.get()
            print('Outlet:', self.get_outlet(), 'Thread:', number, 'Getting:', url)

            response = requests.get(url)
            try:
                self.html_parser.feed(response.text)
                article_string = self.html_parser.get_string()
                self.result_queue.put(Text(
                    slug=self.get_slug(url), outlet=self.get_outlet(),
                    category=self.get_category(url), content=article_string
                ))
                self.url_queue.task_done()
                self.result_queue.join()
            except:
                print('Malformed HTML:', url)
                self.url_queue.task_done()
                self.result_queue.join()

    def get_texts(self, batch_size=30):
        texts = []
        batch_urls = self.urls[:batch_size]
        self.urls = self.urls[batch_size:]

        for url in batch_urls:
            print('Getting', url)

        print('Completed Batch of', batch_size, 'URls')
        return texts

class XMLSiteMapCrawler(HTMLCrawler):
    def get_sitemaps(self):
        return NotImplementedError('Must be overridden by master class')

    def get_url_from_element(self, url):
        return url[0].text

    def get_urls(self):
        urls = []
        for sm in self.get_sitemaps():
            response = requests.get(sm)
            res = response.content

            if sm.endswith('.gz'):
                res = gzip.decompress(res)
            urlset = ElementTree.fromstring(res)
            for url in urlset:
                url = self.get_url_from_element(url)
                urls.append(url)
        return urls
