from wikidata.client import Client
import requests
import json

client = Client()

def search(string):
    params = {
        'action': 'wbsearchentities',
        'language': 'en',
        'format': 'json',
        'search': string
    }

    res = requests.get('https://www.wikidata.org/w/api.php?', params=params)
    res = json.loads(res.content)
    return res['search']

def image_search(string):
    results = search(string)
    if len(results) < 1:
        return False, False

    entity = client.get(results[0]['id'], load=True)
    image_prop = client.get('P18')
    try:
        image = entity[image_prop]
    except KeyError:
        return False, False

    return image.image_url, 'Wikimedia Commons'
