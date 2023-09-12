var elements = document.getElementsByClassName("link")
for (i=0; i<elements.len()-1; i++) {
    var element = elements[i]
    element.onclick = () => location.assign(element.id)
}
/*
document.getElementById('menu').onclick = () => location.assign('menu');
document.getElementById('bcp-shop').onclick = () => location.assign('bcp-shop');
*/