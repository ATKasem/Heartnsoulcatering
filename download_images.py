import html
import os
import re
import urllib.request

source = open("index.html", encoding="utf-8").read()
urls = []
for url in re.findall(r'<img[^>]+src=["\']([^"\']+)', source, re.I):
    url = html.unescape(url)
    if url.startswith("http") and url not in urls:
        urls.append(url)

names = [
    "tracy-thomas.jpeg",
    "blue-bandana-cake.jpeg",
    "sweet-potato-cheesecake-pie.jpeg",
    "red-bandana-cake.jpeg",
    "stuffed-french-toast-rollups.jpeg",
    "banana-pudding-strawberries.jpeg",
    "fried-ribs.jpeg",
    "hennessy-cake.jpeg",
    "skillet-apple-pie-biscuits.jpeg",
]
os.makedirs("website-images", exist_ok=True)
for url, name in zip(urls, names):
    path = os.path.join("website-images", name)
    urllib.request.urlretrieve(url, path)
    print(f"{name}: {os.path.getsize(path)} bytes")
