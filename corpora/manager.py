import os
import pickle
from django.core.exceptions import ObjectDoesNotExist
from google.cloud import language
from google.gax import CallOptions
from .models import Document, ContentType, Outlet, Category, Author, Article, Paragraph

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

def save_article(paragraphs=None, **kwargs):
    kwargs['content_type'], created = ContentType.objects.get_or_create(slug=kwargs['content_type'])
    kwargs['outlet'], created = Outlet.objects.get_or_create(slug=kwargs['outlet'])
    kwargs['category'], created = Category.objects.get_or_create(slug=kwargs['category'])

    article = Article.objects.create( author=Author.objects.all().first(), **kwargs)
    if paragraphs is not None:
        for i, p in enumerate(paragraphs):
            article.paragraphs.add(Paragraph.objects.create(index=i, content=p))

def get_models_for_slug(**kwargs):
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
    return kwargs

def load_corpora(random=False, **kwargs):
    model_kwargs = get_models_for_slug(**kwargs)
    if random:
        return Document.objects.filter(**model_kwargs).order_by('?')
    return Document.objects.filter(**model_kwargs)

def load_articles(**kwargs):
    model_kwargs = get_models_for_slug(**kwargs)
    return Article.objects.filter(**model_kwargs)

def corpus_exists(url):
    return Document.objects.filter(url=url).count() > 0

def get_active_categories():
    return Category.objects.filter(available=True)

def category_active(category):
    try:
        return get_active_categories().get(slug=category).available
    except ObjectDoesNotExist:
        return False
