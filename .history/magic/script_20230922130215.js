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
    "img/banana",
    "img/grapes",
    "img/orange",
    "img/pineapple",
    "img/raspberry",
    "img/strawberry",
    "img/watermelon"
]
var image = getRandomInt(images.length);



var row_count = -1;

for (var i = 0; i < 100; i++) {
    if (i % 20 == 0 && i < 100) { row_count++; }

    var new_div = document.createElement('div');

    var new_image = document.createElement("img");
    var new_text = document.createTextNode(i+1);

    if ((i+1) % 9 == 0) { new_image.src = images[image]+".png" }
    else { new_image.src = images[getRandomInt(images.length)]+".png"}


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
    document.querySelector("#answer").src = images[image]+"_4x.png";
    console.log('clicked');
    document.querySelector("#reveal_modal").showModal();

    document.querySelector("#hide").addEventListener("click", () => {
        console.log("close clicked")
        document.location.reload();
    });
});

var c = document.getElementById("canv");
var $ = c.getContext("2d");

var col = function (x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1, 1);
};
var R = function (x, y, t) {
  return Math.floor(0 + 0 * Math.cos((x * x - y * y) / 300 + t));
};

var G = function (x, y, t) {
  return Math.floor(
    192 +
      64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
  );
};

var B = function (x, y, t) {
  return Math.floor(
    192 +
      64 *
        Math.sin(
          5 * Math.sin(t / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  );
};

var t = 0;
var x;
var y;

var run = function () {
  for (x = 0; x <= 35; x++) {
    for (y = 0; y <= 35; y++) {
      col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }
  t = t + 0.051;
  window.requestAnimationFrame(run);
};

run();
