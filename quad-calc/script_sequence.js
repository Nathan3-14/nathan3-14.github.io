const calculate_sequence = (in_a, in_b, in_c) => {
    out = [];
    for (let num=1; num<=10; num++) {
        a_calcd = in_a.value * (num*num)
        b_calcd = in_b.value * num
        c_calcd = in_c.value * 1
        console.info(a_calcd)
        console.info(b_calcd)
        console.info(c_calcd)
        console.info(a_calcd + b_calcd + c_calcd)
        console.log()
        out.push(a_calcd + b_calcd + c_calcd)
    }
    console.log(out)
}


var ins = document.getElementsByClassName("equ_ins");
//calculate_sequence(ins[0], ins[1], ins[2]);
for (let index=0; index<ins.length-1; index++) {
    ins[index].onchange = calculate_sequence(ins[0], ins[1], ins[2]);
}