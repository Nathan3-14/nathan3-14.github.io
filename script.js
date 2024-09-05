var elements = document.getElementsByClassName("link")


for (i=0; i<elements.length; i++) {
    var element = elements[i]
    console.log(element.id)
    element.addEventListener("click", (event) => {
        var button = event.target
        location.assign(button.id)
    })
}