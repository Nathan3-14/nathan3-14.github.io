var in_1 = Document.getElementById("1");
var in_2 = Document.getElementById("2");
var in_3 = Document.getElementById("3");

var dif_1 = in_2 - in_1
var dif_2 = in_3 - in_2
var dif_dif_1 = dif_2 - dif_1


Document.getElementById("4").addEventListener("click", () => {
    var a = dif_dif_1 / 2;
    var b = dif_1 - (3 * a);
    var c = in_1 - (a + b);

    Document.getElementById("output").innerHTML = a.toString() + "n^2 + " + b.toString() + "n + " + c.toString();
})