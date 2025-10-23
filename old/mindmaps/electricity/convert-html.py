from bs4 import BeautifulSoup

with open("./mindmaps/electricity/index.html", "r") as f:
    html_code = f.read()

soup = BeautifulSoup(html_code, 'lxml')
head = soup.find("head")
body = soup.find("body")

new_title = soup.new_tag("title")
new_title.string = "Electricity"
title = soup.find("title")

style_link = soup.new_tag("link")
style_link["rel"] = "stylesheet"
style_link["href"] = "../main.css"
head.append(style_link)

title.replace_with(new_title)

with open("./mindmaps/electricity/index.html", "w") as f:
    f.write(soup.prettify())

print(soup.prettify())