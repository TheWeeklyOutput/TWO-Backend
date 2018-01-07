import re
import urllib
import feedparser
import html
from .analyser import Analyser

class Crawler:
    analyser = Analyser()
    fulltext_url = 'http://ftr.fivefilters.org/makefulltextfeed.php?{}'
    categories = {
        'us': {'cnn': 'http://rss.cnn.com/rss/edition_us.rss'},
        'technology': {'cnn': 'http://rss.cnn.com/rss/edition_technology.rss'},
        'entertainment': {'cnn': 'http://rss.cnn.com/rss/edition_entertainment.rss'},
        'sports': {'cnn': 'http://rss.cnn.com/rss/edition_sport.rss'},
        'politics': {'cnn': 'http://rss.cnn.com/rss/cnn_allpolitics.rss'},
        'health': {'cnn': 'http://rss.cnn.com/rss/cnn_health.rss'},
    }

    def crawl_newest_articles(self):
        for category, urls in self.categories.items():
            for outlet, rss_url in urls.items():
                headline, content = self.parse_rss(rss_url)

                self.analyser.add_text(
                    content,
                    headline=headline,
                    content_type='news',
                    category=category,
                    outlet=outlet,
                    generated=False
                )

    def parse_rss(self, rss_url):
        param = {'url': rss_url}
        fulltext_rss_url = self.fulltext_url.format(urllib.parse.urlencode(param))
        feed = feedparser.parse(fulltext_rss_url)
        newest_article = feed['items'][0]

        headline = newest_article['title']
        content = re.sub("<.*?>", " ", newest_article['summary'])
        content = html.unescape(content)

        return headline, content
