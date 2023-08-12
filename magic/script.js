function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var icon_rows = [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div')
];

var images = [
    "img/banana.png",
    "img/grapes.png",
    "img/orange.png",
    "img/pineapple.png",
    "img/raspberry.png",
    "img/strawberry.png",
    "img/watermelon.png"
]
var image = getRandomInt(images.length);



var row_count = -1;

for (var i = 0; i < 100; i++) {
    if (i % 20 == 0 && i < 100) { row_count++; }

    var new_div = document.createElement('div');

    var new_image = document.createElement("img");
    var new_text = document.createTextNode(i+1);

    if ((i+1) % 9 == 0) { new_image.src = images[image] }
    else { new_image.src = images[getRandomInt(images.length)]}


    new_div.appendChild(new_image);
    new_div.appendChild(new_text);
    new_div.className = "icon"

    icon_rows[row_count].appendChild(new_div);
    icon_rows[row_count].className = "icon-row";
}


for (var i = 0; i < icon_rows.length; i++) {
    document.body.querySelector('#icon-rows').appendChild(icon_rows[i])
}


document.querySelector("#reveal").addEventListener("click", () => {
    document.querySelector("#answer").src = images[image];
    console.log('clicked');
    document.querySelector("#reveal_modal").showModal();

    document.querySelector("#hide").addEventListener("click", () => {
        console.log("close clicked")
        document.location.reload();
    });
});
