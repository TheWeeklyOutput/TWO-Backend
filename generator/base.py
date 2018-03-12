import pickle
import base64
import re
from bs4 import BeautifulSoup

class BaseObject(object):
    @staticmethod
    def find_appendant(items, begin_offset, end_offset):
        appendant_items = []
        for item in items:
            if item.begin >= begin_offset \
                    and item.begin < end_offset:
                appendant_items.append(item)
        return appendant_items

    @classmethod
    def from_language_cloud_repr(cls, *args, **kwargs):
        return NotImplemented

    @classmethod
    def from_xml(cls, file):
        file.open()
        soup = BeautifulSoup(file.read(), 'lxml')
        pickle_string = soup.document.annotations.get_text()
        annotations = pickle.loads(base64.b64decode(re.findall(r'\sb\'(.+?)\'\s', pickle_string)[0]))
        file.close()
        return cls.from_repr(annotations)
    
    @classmethod
    def from_repr(cls, obj, *args, **kwargs):
        module = obj.__module__
        if 'backend.generator' in module:
            return obj
        if 'django.db.models.fields.files' in module:
            return cls.from_xml(obj)
        if 'google.cloud.language' in module:
            return cls.from_language_cloud_repr(obj, *args, **kwargs)
