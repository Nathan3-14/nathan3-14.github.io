// const btn = document.getElementById('submit');        
// const radioButtons = document.querySelectorAll('input[name="theme"]');
// btn.addEventListener("click", () => {
//     let selectedTheme;
//     for (const radioButton of radioButtons) {
//         if (radioButton.checked) {
//             selectedTheme = radioButton.value;
//             break;
//         }
//     }
//     console.log(selectedTheme);
// });

const output = document.getElementById("output");
const radioButtons = document.querySelectorAll('input[name="theme"]');
let selectedTheme;
setInterval(function() {
    let selectedTheme;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedTheme = radioButton.value;
            break;
    };
    output.innerHTML = selectedTheme;
}}, 500);

/*
setInterval(function() {
    console.log("Hello, world!");
}, 1000);
*/