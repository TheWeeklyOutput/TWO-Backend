import os
import pickle
import base64
from django.core.exceptions import ObjectDoesNotExist
from django.core.files.base import ContentFile
from django.conf import settings
from bs4 import BeautifulSoup
from google.cloud import language
from .models import Corpus, GeneratedDocument, ContentType, Outlet, Category, Author

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath("FakeNewsGen-d45b8ea85e8f.json")
features = {
    "extract_syntax": True,
    "extract_entities": True,
    "extract_document_sentiment": True,
}

def analyse_corpus(text, max_failures=5):        
    if max_failures < 1: return

    client = language.LanguageServiceClient()
    
    document = language.types.Document(
        content=text.encode('utf-8'),
        type=language.enums.Document.Type.PLAIN_TEXT,
        language='en'
    )

    try:
        doc = client.annotate_text(document, features, encoding_type=language.enums.EncodingType.UTF8)
        return doc
    except:
        print('Retrying... Max Failures: ' + str(max_failures-1))
        return analyse_corpus(text, max_failures=max_failures-1)

def format_corpus_content(content, title=None, description=None):
    soup = BeautifulSoup('', 'lxml')
    if title is not None:
        soup.append(soup.new_tag('t'))
        soup.t.string = title

    if description is not None:
        soup.append(soup.new_tag('d'))
        soup.d.string = description

    if type(content) == type(str()):
        content = BeautifulSoup(content, 'lxml')
        content = content.find_all('p', recursive=False)
    for paragraph in content:
        soup.append(paragraph)
    return soup

def generate_document_xml(annotations, content=None, title=None, author=None, date=None, description=None, **kwargs):
    content = format_corpus_content(content, title=title, description=description)
    if annotations is None:
        annotations = analyse_corpus(str(content))

    soup = BeautifulSoup(open(os.path.join(settings.MEDIA_ROOT, 'xml/default.xml')), 'xml')
    pkl = pickle.dumps(annotations)
    soup.document.annotations.string = str(base64.b64encode(pkl))

    if author is not None:
        soup.document.author.string = str(author)
    
    if date is not None:
        soup.document.date.string = date.isoformat()

    soup.document.article.append(content)

    return ContentFile(soup.prettify(), name='document.xml')

def save_corpus(annotations=None, content=None, **kwargs):
    kwargs['content_type'], created = ContentType.objects.get_or_create(name=kwargs['content_type'])
    outlet, created = Outlet.objects.get_or_create(name=kwargs.pop('outlet', 'Fake Outlet'))
    kwargs['category'], created = Category.objects.get_or_create(slug=kwargs['category'])
    author, created = Author.objects.get_or_create(name=kwargs.pop('author', 'Fake Author'))
    author.add_outlet(outlet)

    xml = generate_document_xml(annotations, author=author, content=content, **kwargs)
    return Corpus.objects.create(xml=xml, author=author, outlet=outlet, **kwargs)

def random_author():
    return Author.objects.filter(generated=True).order_by('?').first()

def save_generated_document(annotations, author=None, html_content=None, **kwargs):
    if author is None:
        author = random_author()
    xml = generate_document_xml(annotations, author=author, content=html_content, **kwargs)
    return GeneratedDocument.objects.create(xml=xml, author=author, html_content=html_content, **kwargs)

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
        return Corpus.objects.filter(**model_kwargs).order_by('?')
    return Corpus.objects.filter(**model_kwargs)

def load_generated_documents(**kwargs):
    model_kwargs = get_models_for_slug(**kwargs)
    return GeneratedDocument.objects.filter(**model_kwargs)

def corpus_exists(url):
    return Corpus.objects.filter(url=url).count() > 0

def get_active_categories():
    return Category.objects.filter(available=True)

def category_active(category):
    try:
        return get_active_categories().get(slug=category).available
    except ObjectDoesNotExist:
        return False

def fake_corpus():
    return Corpus.objects.get(pk=1)
