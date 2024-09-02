var change_theme = () => {
    if (selected_theme == "light") {
        selected_theme = "dark"
    } else {
        selected_theme = "light"
    }
    console.log(`Setting theme to ${selected_theme}`)
    document.getElementById("theme").href = `style-${selected_theme}.css`
}

var theme_change_button = document.createElement("button")
var selected_theme = document.getElementById("theme").href.split(".")[0].split("-")[1]
theme_change_button.onclick = change_theme
theme_change_button.innerHTML = "Change Theme"

document.getElementById("main").prepend(theme_change_button)
