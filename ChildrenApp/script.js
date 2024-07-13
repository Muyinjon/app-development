let selectcolor = document.querySelectorAll(".selectcolor");
let card = document.querySelector(".card");
let colorselector = document.querySelector(".colorselector");

let color = ["red", "green", "blue", "yellow", "orange", "purple", "white", "black", "reset"];
let bgcolortxt = document.querySelector(".selectcolor h1").textContent;

let i = 0;

colorselector.addEventListener("click", function () {
    selectcolor[i].style.backgroundColor =  color[i];
    bgcolortxt = document.querySelector(".selectcolor h1").textContent = color[i];
    i++;
    if (i == 8) {
        i = 0;
    }
})