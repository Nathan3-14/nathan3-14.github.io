var target_location = "https://bbc.co.uk";

var button = document.getElementById("redirect-button");
button.onclick = () => {
    window.location.replace(target_location);
}
