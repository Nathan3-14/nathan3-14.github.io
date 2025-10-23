var buttons = document.getElementsByClassName("gradient-button");

for (let i=0; i < buttons.length; i++) {
    let button = buttons[i];

    let id = button.id
    let colours = id.split("-").map(colour => "#" + colour);
    let gradient_style = "linear-gradient(to right, " + colours.join(", ") + ")"
    button.style.background = gradient_style

    button.addEventListener("click", () => {
        window.location += button.id;
    });
}
