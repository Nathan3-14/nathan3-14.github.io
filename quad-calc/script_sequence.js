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

const clear = () => {
    var num_ins = document.getElementsByClassName("num_ins");
    console.warn(num_ins);
    console.warn(num_ins.length);
    for (let i=0; i<num_ins.length; i++) {
        console.info(num_ins[i]);
        num_ins[i].value = " ";
    }
}

var ins = document.getElementsByClassName("val_ins")
for (var i = 0; i < ins.length; i++) {
    ins[i].onchange = () => {
        calculate_sequence();
        clear();
    }
}