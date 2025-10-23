import os
import sys

if __name__ == "__main__":
    template = "<h1>Error creating gradient</h1>"
    with open("template.html", "r") as f:
        template = f.read()

    colour_filepath = sys.argv[1]
    
    data = []
    with open(colour_filepath, "r") as f:
        data = f.readlines()
    
    for colour_set in data:
        new_path = "-".join([colour[1:] for colour in colour_set.split(", ")]).strip()
        print(f"'{new_path}'")
        if not os.path.exists(new_path):
            os.mkdir(new_path)
        with open(f"{new_path}/index.html", "w") as f:
            f.write(template.replace("'#~acoloursa~#'", colour_set))

        home_page = []
        with open("index-backup.html", "r") as f:
            home_page = f.readlines()
        home_page.insert(8, f"\t<div id={new_path} class=\"gradient-button\"></div>\n")
        with open("index.html", "w") as f:
            f.write("".join(home_page))
