


let a = true;
let b = false;

let alter = document.body.querySelector("form input:nth-of-type(1)");
let info = document.querySelector("p");



function adult() {

    if (alter.value >= 18) {

    console.log(a);
        info.textContent = "Volljährig";

    } else {
        
        console.log(b);
        info.textContent = "Minderjährig";

    }

 }