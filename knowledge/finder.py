from tqdm import tqdm
import backend.knowledge.wikidata as wikidata
import backend.knowledge.google as google

class Finder:
    knowledge_modules = [wikidata, google]
    def get_document_image(self, document):
        self.tdqm = tqdm([m for s in document.sentences for m in s.mentions], desc='')
        for mention in self.tdqm:
            self.tdqm.set_description('Image Search for: {0}'.format(mention.text))
            image_url, image_credit = self.image_search(mention.text)
            if image_url:
                return image_url, image_credit
        return None, None

    def image_search(self, string):
        result = False
        for module in self.knowledge_modules:
            result = module.image_search(string)
            if result:
                return result
        return False, False

    def url_search(self, string):
        result = False
        for module in self.knowledge_modules:
            result = module.url_search(string)
            if result:
                return result
        return False

    def populate_anchors(self, soup):
        anchors = soup.find_all('a')
        self.tdqm = tqdm(anchors, desc='')

        for a in self.tdqm:
            self.tdqm.set_description('URl Search for: {0}'.format(a.get_text()))
            url = self.url_search(a.get_text())
            if url:
                a['href'].url = url
        return soup
