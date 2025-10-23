var in_a = document.getElementById("a");
var in_b = document.getElementById("b");
var in_c = document.getElementById("c");

const calculate_sequence = () => {
    var out = [];
    for (let i=1; i < 11; i++) {
        var temp = 0
        temp += i**2 * parseInt(in_a.value);
        temp += i * parseInt(in_b.value);
        temp += parseInt(in_c.value);
        out.push(temp);
    }
    document.getElementById("output_2").innerHTML = out;
}

/* var ins = document.getElementsByClassName("val_ins")
for (var i = 0; i < ins.length; i++) {
    console.log(ins[i])
    ins[i].addEventListener("change", () => { calculate_sequence() })
} */

document.getElementById("test").onclick = () => {
    calculate_sequence();
    console.log("hallo");
};