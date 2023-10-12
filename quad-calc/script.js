var in_1 = document.getElementById("1");
var in_2 = document.getElementById("2");
var in_3 = document.getElementById("3");

var dif_1; var dif_2; var dif_dif_1;

var a_2 = document.getElementById("a");
var b_2 = document.getElementById("b");
var c_2 = document.getElementById("c");

const calculate_equation = () => {
    dif_1 = in_2.value - in_1.value
    dif_2 = in_3.value - in_2.value
    dif_dif_1 = dif_2 - dif_1

    console.log(in_1.value, in_2.value, in_3.value);

    var a = dif_dif_1 / 2;
    console.log(dif_1)
    console.log(3*a);
    var b = dif_1 - (3 * a);
    console.log(b);
    var c = in_1.value - (a + b);

    for (let i=0; i < 10; i++) {
        console.log("i: " + i.toString())
        document.getElementById("output2")[i] = (a * i**2) + (b * i) + (c)
    }

    document.getElementById("output").innerHTML = a.toString() + "n^2 + " + b.toString() + "n + " + c.toString();

}

var ins = document.getElementsByClassName("num_ins")
for (var i = 0; i < ins.length; i++) {
    console.log(ins[i])
    ins[i].addEventListener("change", () => { calculate_equation() })
}

