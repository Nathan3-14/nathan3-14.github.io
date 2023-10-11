var in_1 = document.getElementById("1");
var in_2 = document.getElementById("2");
var in_3 = document.getElementById("3");


var dif_1 = in_2.value - in_1.value
var dif_2 = in_3.value - in_2.value
var dif_dif_1 = dif_2 - dif_1


document.getElementById("4").addEventListener("click", () => {
    console.log(in_1.value, in_2.value, in_3.value);

    var a = dif_dif_1 / 2;
    console.log(dif_1)
    console.log(3*a);
    var b = dif_1 - (3 * a);
    console.log(b);
    var c = in_1.value - (a + b);

    document.getElementById("output").innerHTML = a.toString() + "n^2 + " + b.toString() + "n + " + c.toString();
})