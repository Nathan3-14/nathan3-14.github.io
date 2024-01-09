const calculate_sequence = (in_a, in_b, in_c) => {
    out = [];
    for (let num=1; num<=10; num++) {
        a_calcd = in_a.value * (num*num)
        b_calcd = in_b.value * num
        c_calcd = in_c.value * 1
        out.push(a_calcd + b_calcd + c_calcd)
    }
    document.getElementById("output_sequence").innerHTML = out;
}


var ins = document.getElementsByClassName("seq_ins");
for (let index=0; index<ins.length-1; index++) {
    const calculate_sequence_callable = () => {
        calculate_sequence(ins[0], ins[1], ins[2]);
    }
    ins[index].oninput = calculate_sequence_callable;
}