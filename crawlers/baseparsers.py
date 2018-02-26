from html.parser import HTMLParser

class BaseParser(HTMLParser):
    inline_tags = ['span', 'a']
    parseing = False
    content_useful = False
    content_headline = False
    headline = ''
    data = []

    def check_content(self, tag, attrs):
        return NotImplementedError('Must be overridden by master class')

    def handle_starttag(self, tag, attrs):
        if tag == 'html':
            self.data = []
            self.headline = ""
            self.parseing = True

        if tag not in self.inline_tags:
            useful, headline = self.check_content(tag, attrs)
            self.content_useful = useful
            self.content_headline = headline

    def handle_endtag(self, tag):
        if tag == 'html':
            self.parseing = False

    def handle_data(self, data):
        if self.content_headline:
            self.headline += data
        if self.content_useful:
            self.data.append(data)

    def check_data(self):
        if len(self.data) < 1 or len(self.headline) < 1:
            raise ValueError('No Data')

    def get_data(self):
        while self.parseing:
            pass
        self.check_data()
        return self.data

    def get_content(self):
        return NotImplementedError('Must be overridden by master class')
