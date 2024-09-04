document.querySelector("#reveal_modal").close()

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

var background_change = 0.04

var icon_rows = [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div')
]

var image_paths = [
    "img/banana",
    "img/grapes",
    "img/orange",
    "img/pineapple",
    "img/raspberry",
    "img/strawberry",
    "img/watermelon"
]
var temp_images = image_paths
var images = []
for (let x=0;x<4;x++) {
    var temp_image = temp_images[getRandomInt(temp_images.length)] 
    console.log(`Selected ${temp_image} from ${temp_images}`)
    for (let y=0;y<9;y++) {
        images.push(temp_image)
    }
    temp_images.splice(temp_images.indexOf(temp_image), 1);
}
var image = temp_images[getRandomInt(temp_images.length)]
images.push(image)
images.push(image)
images.push(image)
images.push(image)
console.log(images.toString())



var row_count = -1

for (var i = 0; i < 100; i++) {
    if (i % 20 == 0 && i < 100) { row_count++ }

    var new_div = document.createElement('div')

    var new_image = document.createElement("img")
    var new_text = document.createTextNode(i+1)

    if ((i+1) % 9 == 0) { new_image.src = image+".png" }
    else { new_image.src = images[getRandomInt(images.length)]+".png"}


    new_div.appendChild(new_image)
    new_div.appendChild(new_text)
    new_div.className = "icon"

    icon_rows[row_count].appendChild(new_div)
    icon_rows[row_count].className = "icon-row"
}


for (var i = 0; i < icon_rows.length; i++) {
    document.body.querySelector('#icon-rows').appendChild(icon_rows[i])
}


document.querySelector("#reveal").addEventListener("click", () => {
    document.querySelector("#answer").src = image+"_4x.png"
    console.log('clicked')
    document.querySelector("#reveal_modal").showModal()
    document.querySelector("#hide").addEventListener("click", () => {
        console.log("close clicked")
        document.location.reload()
    })
})


document.querySelector("#bg_toggle").addEventListener("click", () => {
  console.log("clicked")
  console.log("background change " + background_change)
  console.log(background_change == 0)
  if (background_change == 0) {
    background_change=0.04
    document.querySelector(".fa-lightbulb").classList.remove('fa-regular')
    document.querySelector(".fa-lightbulb").classList.add('fa-solid')
  }
  else {if (background_change == 0.04) {
    background_change = 0
    document.querySelector(".fa-lightbulb").classList.add('fa-regular')
    document.querySelector(".fa-lightbulb").classList.remove('fa-solid')
  }}
})


// var c = document.getElementById("canv")
// var $ = c.getContext("2d")

// var col = function (x, y, r, g, b) {
//   $.fillStyle = "rgb(" + r + "," + g + "," + b + ")"
//   $.fillRect(x, y, 1, 1)
// }
// var R = function (x, y, t) {
//   return Math.floor(0 + 0 * Math.cos((x * x - y * y) / 300 + t))
// }

// var G = function (x, y, t) {
//   return Math.floor(
//     192 +
//       64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
//   )
// }

// var B = function (x, y, t) {
//   return Math.floor(
//     192 +
//       64 *
//         Math.sin(
//           5 * Math.sin(t / 9) +
//             ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
//         )
//   )
// }

// var t = 0
// var x
// var y

// var run = function () {
//   for (x = 0; x <= 35; x++) {
//     for (y = 0; y <= 35; y++) {
//       col(x, y, R(x, y, t), G(x, y, t), B(x, y, t))
//     }
//   }
//   t = t + background_change 
//   // t = t + 1000
//   window.requestAnimationFrame(run)
// }

// run()
