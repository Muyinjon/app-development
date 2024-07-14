let selectcolor = document.querySelectorAll(".selectcolor");
let card = document.querySelector(".card");
let colorselector = document.querySelector(".colorselector");
let colorwindow = document.querySelector(".colorwindow");



for (let i = 0; i < selectcolor.length; i++) {
    let bgcolortxt = document.querySelector(`.selectcolor:nth-child(${i + 1}) > h1`);

    selectcolor[i].addEventListener("click", function () {
        selectcolor[i].style.backgroundColor = bgcolortxt.innerHTML;
        colorwindow.style.background = bgcolortxt.innerHTML;
        colorwindow.innerHTML = bgcolortxt.innerHTML;
        if (i === 3 || i === 6 || i === 8) {
            selectcolor[i].style.color = 'black';
        }
    });
}


// calculator for html

let calculatoncontainer = document.querySelector(".calculator-container");
let operation = document.querySelectorAll(".operation button");
let result = document.querySelector(".result");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");

for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener("click", function () {
        input1 = input1.value
        input2 = input2.value
        switch (operation[i].innerHTML) {
            case "+":
                result.innerHTML = Number(input1) + Number(input2);
                break;
            case "-":
                result.innerHTML = Number(input1) - Number(input2);
                break;
            case "*":
                result.innerHTML = Number(input1) * Number(input2);
                break;
            case "/":
                result.innerHTML = Number(input1) / Number(input2);
                break;
        }
    })
}

