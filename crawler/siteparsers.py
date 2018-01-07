from html.parser import HTMLParser

class BaseParser(HTMLParser):
    parseing = False
    content_useful = False
    content_headline = False
    data = []

    def check_content(self, tag, attrs):
        return NotImplementedError('Must be overridden by master class')

    def handle_starttag(self, tag, attrs):
        if tag == 'html':
            self.data = []
            self.parseing = True

        useful, headline = self.check_content(tag, attrs)
        self.content_useful = useful
        self.content_headline = headline

    def handle_endtag(self, tag):
        if tag == 'html':
            self.parseing = False


    def handle_data(self, data):
        if self.content_headline:
            self.data.append('# ' + data + '\n')

        if self.content_useful:
            self.data.append(data)
 
    def get_data(self):
        while self.parseing:
            pass
        return self.data

    def get_string(self):
        return NotImplementedError('Must be overridden by master class')
