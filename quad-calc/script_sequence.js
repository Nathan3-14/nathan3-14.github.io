var in_a = document.getElementById("a");
var in_b = document.getElementById("b");
var in_c = document.getElementById("c");


const calculate_sequence = () => {
    out = [];
    for (let i = 1; i <= 10; i++) {
        var temp = 0;
        temp += i**2 * parseInt(in_a.value);
        temp += i    * parseInt(in_b.value);
        temp +=        parseInt(in_c.value);
        out.push(temp);
    }

    document.getElementById("output_sequence").innerHTML = out;
}

var ins = document.getElementsByClassName("val_ins")
for (var i = 0; i < ins.length; i++) {
    console.log("ins")
    console.log(ins[i])
    ins[i].onchange = calculate_sequence
}