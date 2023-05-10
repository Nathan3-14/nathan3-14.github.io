const themes = ["dark", "light"];

for (var i = 0; i < themes.length; i++) {
    let theme = themes[i];
    document.getElementById(theme).addEventListener("click", function() {
        document.getElementById("style").href="style-"+theme+".css";
    });
}