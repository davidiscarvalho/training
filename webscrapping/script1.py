import requests
from bs4 import BeautifulSoup

r = requests.get("http://pythonhow.com/example.html")
c = r.content

print(c)

soup = BeautifulSoup(c, "html.parser")

# print(soup.prettify())

all = soup.find_all("h1", {"class": "cities"})
print(all)

all[0].find_all("h2")[0].text

for item in all:
    print(item.find_all("h2")[0].text)
