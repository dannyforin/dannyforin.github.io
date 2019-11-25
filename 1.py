import requests
from lxml import etree
import json
import scrapy


def getOnePage():
    url = 'https://m.qimiaomh.com/'
    headers = {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'}
    r = requests.get(url, headers=headers)
    r.encoding = r.apparent_encoding
    return r.text


a = getOnePage()
print(a)


def parse(text):
    html = etree.HTML(text)
    names = html.xpath(
        '//div[@class="pl2"]/a/text()')
    content = html.xpath(
        '//div[@class="pl2"]/p/text()')

    item = {}
    for name, href in zip(names, content):
        item['name'] = name
        item['href'] = href
    print(item['name'])
    yield item


def saveFile(item):
    with open('movie.json', 'r', encoding='utf-8') as f:
        # json.dump(item, f, ensure_ascii=False)
        return


def run():
    page = getOnePage()
    item = parse(page)
    saveFile(item)


if __name__ == "__main__":
    run()
