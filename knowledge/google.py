from GoogleScraper import scrape_with_config, GoogleSearchError
from GoogleScraper.database import ScraperSearch

def image_search(keyword):
    print('Searching for: '+ keyword)
    config = {
        'keyword': keyword,
        'search_engines': 'google',
        'search_type': 'image',
        'scrapemethod': 'selenium'

    }

    try:
        sqlalchemy_session = scrape_with_config(config)
    except GoogleSearchError as e:
        print(e)
    dir(sqlalchemy_session)

    image_urls = []
    search = sqlalchemy_session.query(ScraperSearch).all()[-1]
    for serp in search.serps:
        image_urls.extend(
            [link.link for link in serp.links]
        )

    print(image_urls)
