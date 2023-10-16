var in_1 = document.getElementById("1");
var in_2 = document.getElementById("2");
var in_3 = document.getElementById("3");

var dif_1; var dif_2; var dif_dif_1;

const calculate_equation = () => {
    dif_1 = in_2.value - in_1.value
    dif_2 = in_3.value - in_2.value
    dif_dif_1 = dif_2 - dif_1

    console.log(in_1.value, in_2.value, in_3.value);

    var a = dif_dif_1 / 2;
    var b = dif_1 - (3 * a);
    var c = in_1.value - (a + b);
    var abc = [a, b, c]

    document.getElementById("output_equation").innerHTML = a.toString() + "n^2 + " + b.toString() + "n + " + c.toString();
    var val_ins = document.getElementsByClassName("val_ins");
    for (var i = 0; i < val_ins.length; i++) {
        val_ins[i].value = abc[i];
    }
    val_ins[0].onchange();

}

var ins = document.getElementsByClassName("num_ins")
for (var i = 0; i < ins.length; i++) {
    console.log(ins[i])
    ins[i].onchange = calculate_equation
}

