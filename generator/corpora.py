import os
import pickle
from google.cloud import language
from google.gax import CallOptions

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("FakeNewsGen-d45b8ea85e8f.json")

class CorporaManager:
    def save_text(content_type, outlet, category, slug):
class GoogleAnalysisManager:
    def __init__(self, storage_root):
        self.storage_root = storage_root

    def load_multiple(self, to_load):
        docs = []
        for content_type, outlet, category in to_load:
            docs.extend(self.load(content_type, outlet, category))
        return docs

    def load(self, content_type, outlet, category):
        super_dir = os.path.join(self.storage_root, content_type, outlet, category)
        docs = []
        for dir in os.listdir(super_dir):
            dir = os.path.join(super_dir, dir)
            docs.append(self.load_from_directory(dir))
        return docs

    def load_from_directory(self, dir_name):
        print('Parseing', dir_name)
        txt = ''
        for file in os.listdir(dir_name):
            file_path = os.path.join(dir_name,file)
            if file.endswith('.pkl'):
                return self.load_from_pkl(file_path)
            elif file.endswith(".txt"):
                txt = file_path
        if txt != '':
            return self.load_from_txt(txt)

    def load_from_pkl(self, file_path):
        with open(file_path, "rb") as file:
            return pickle.load(file)

    def load_from_txt(self, file_path):
        with open(file_path, "r") as file:
            file_string = file.read()
            client = language.client.Client()
            document = client.document_from_text(content=file_string, language='en')

        print('Sending text to Google ...')
        try:
            doc = document.annotate_text()
        except:
            return self.load_from_txt(file_path)
        print('Writing .pkl ...')

        with open(file_path[:-12]+'annotations.pkl', "wb") as file:
            file.write(pickle.dumps(doc))

        os.rename(file_path, file_path[:-3]+'out-txt')
        return doc
