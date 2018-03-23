from wikidata.client import Client
import requests
import json

client = Client()
image_prop = 'P18'
described_at_url_prop = 'P973'
official_website_prop = 'P856'
sitelinks = 'sitelinks'

def search(string):
    params = {
        'action': 'wbsearchentities',
        'language': 'en',
        'format': 'json',
        'search': string
    }

    res = requests.get('https://www.wikidata.org/w/api.php?', params=params)
    res = json.loads(res.content.decode('utf-8'))
    return res['search']

def search_for_props(string, props):
    results = search(string)
    if len(results) < 1:
        return False

    entity = client.get(results[0]['id'])

    for prop in props:
        try:
            result = entity[client.get(prop)]
            return result
        except KeyError:
            continue
    else:
        return False

def image_search(string):
    result = search_for_props(string, (image_prop,))
    if result:
        result = result.image_url
    return result, 'Wikimedia Commons'

def url_search(string):
    result = search_for_props(string, (described_at_url_prop, official_website_prop, sitelinks))
    if result:
        result = result.get('enwiki', result)
    return result
