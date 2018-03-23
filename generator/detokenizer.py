import re
from google.cloud.language import enums
from bs4 import BeautifulSoup

class Detokenizer:
    finalized = False
    ENCASING_CHARACTERS = [
        ('[', ']'),
        ('(', ')'),
        ('\"', '\"'),
        ('\'', '\'')
    ]
    TAG_ALIASES = [
        ('st', 'strong'),
    ]
    REPLACE_CHARS = [
        (re.compile(r'(\s+-\s+)'), '-')
    ]
    PUNCTUATION_CHARS = [
        '.', ',', ':', ';', '!', '?',
        '\'s', 'n\'t', '\'re', '\'m', 'na', '\'ve', '\'d', '\'ll'
    ]

    def detokenize_document(self, document):
        self.reset(document)

        self.merge_tags()
        self.merge_punctuation()
        self.merge_encasing_characters()
        self.merge_rest()
        self.replace()
        self.finalize()
    
    def reset(self, document):
        self.finalized = False
        self.document = document
        self.result = document.tokens

    def finalize(self):
        self.finalized = True

    def merge_to_text(self, min, max):
        arr = []
        max += 1
        for i in range(min, max):
            arr.append(getattr(self.result[i], 'text', self.result[i]))
        self.result = self.result[0:min] + [''.join(arr)] + self.result[max:len(self.result)]

    def merge_tags(self, start=0):
        min = None
        max = None
        for i in range(start, len(self.result)):
            t = self.result[i]
            if type(t) != type(str()):
                t = t.text.strip()
                if min is not None and t == '>':
                    max = i
                elif t == '<':
                    min = i
                    start = i-1
                if min is not None and max is not None:
                    self.merge_to_text(min, max)
                    break
        else:
            return
        self.merge_tags(start=start)

    def check_token_puncuation(self, t):
        return t.text in self.PUNCTUATION_CHARS

    def merge_punctuation(self, start=0):
        for i in range(start, len(self.result)):
            t = self.result[i]
            if type(t) != type(str()):
                if self.check_token_puncuation(t):
                    self.merge_to_text(i-1, i)
                    start = i-1
                    break
        else:
            return
        self.merge_punctuation(start=start)

    def merge_encasing_characters(self, start=0):
        current_stop = False
        for i in range(start, len(self.result)):
            try:
                t = self.result[i]
            except IndexError:
                return
            if type(t) != type(str()):
                if current_stop:
                    if t.text == current_stop:
                        self.merge_to_text(i-1, i)
                        break
                for start_char, stop_char in self.ENCASING_CHARACTERS:
                    if t.text == start_char and i+1<len(self.result):
                        self.merge_to_text(i, i+1)
                        current_stop = stop_char
                        start = i-1
                        print(start, len(self.result))
        else:
            return
        self.merge_encasing_characters(start=start)

    def merge_rest(self):
        for i, t in enumerate(self.result):
            if type(t) != type(str()):
                self.result[i] = t.text
        self.result = ' '.join(self.result)

    def replace(self):
        for pattern, after in self.REPLACE_CHARS:
            print(self.result)
            self.result = pattern.sub(after, self.result)
            print(self.result)

    def handle_tag_aliases(self, soup):
        for tag in soup.find_all(True):
            for alias, name in self.TAG_ALIASES:
                if tag.name == alias:
                    tag.name = name 
                    break

    def get_content_soup(self, soup):
        self.handle_tag_aliases(soup)
        content = soup.new_tag('article')       
        for p in soup.body.find_all('p', recursive=False):
            content.append(p)
        return content

    def get_title(self, soup):
        return soup.t.string.strip()

    def get_description(self, soup):
        return soup.d.string.strip()
      

    def get_data(self):
        while not self.finalized:
            pass
        soup = BeautifulSoup(self.result, 'lxml')

        content_soup = self.get_content_soup(soup)
        title = self.get_title(soup)
        description = self.get_description(soup)
        return title, description, content_soup
