import os
import pickle
from google.cloud import language
from google.gax import CallOptions
from .models import Document, ContentType, Outlet, Category, Author

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("FakeNewsGen-d45b8ea85e8f.json")

def analyse_corpus(text, max_failures=5):        
    if max_failures < 1: return

    client = language.client.Client()
    document = client.document_from_text(content=text, language='en')

    try:
        return document.annotate_text()
    except:
        print('Retrying... Max Failures: ' + max_failures-1)
        return analyse_corpus(text, max_failures=max_failures-1)

def save_corpus(annotations=None, **kwargs):
    if annotations is None:
        annotations = analyse_corpus(kwargs['content'])

    kwargs['content_type'], created = ContentType.objects.get_or_create(slug=kwargs['content_type'])
    kwargs['outlet'], created = Outlet.objects.get_or_create(slug=kwargs['outlet'])
    kwargs['category'], created = Category.objects.get_or_create(slug=kwargs['category'])

    return Document.objects.create(annotations=annotations, author=Author.objects.all().first(), **kwargs)

def load_corpora(random=False, **kwargs):
    args = [
        ('content_type', ContentType),
        ('outlet', Outlet),
        ('category', Category),
    ]

    for arg, c in args:
        try:
            kwargs[arg] = c.objects.get(slug=kwargs[arg])
        except KeyError:
            pass

    if random:
        return Document.objects.filter(**kwargs).order_by('?')
    return Document.objects.filter(**kwargs)

def corpus_exists(url):
    return Document.objects.filter(original_url=url).count() > 0
