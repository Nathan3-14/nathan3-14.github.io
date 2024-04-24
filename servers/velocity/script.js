var target_location = "http://127.0.0.1:25570";


console.log(target_location);
document.getElementById("test-button").onclick = () => {
    window.location.href = target_location;
}
