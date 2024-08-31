var change_theme = () => {
    console.log(`Setting theme to ${selected_theme}`)
    if (selected_theme == "light") {
        selected_theme = "dark"
    } else {
        selected_theme = "light"
    }
    document.getElementById("theme").href = `style-${selected_theme}.css`
}

var theme_change_button = document.createElement("button")
var selected_theme = "light"
theme_change_button.onclick = change_theme
theme_change_button.innerHTML = "Change Theme"

document.body.appendChild(theme_change_button)
