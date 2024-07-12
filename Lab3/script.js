
// collect the elements

let shape = document.querySelector(".ShapeDiv");
let btnsquare = document.querySelector(".btnsquare");
let btnrectangle = document.querySelector(".btnrectangle");
let btncircle = document.querySelector(".btncircle");

btnsquare.addEventListener("click", function () {
    document.querySelector(".ShapeDiv p").textContent = "Square";
    shape.classList.add("square");
    shape.classList.remove("rectangle");
    shape.classList.remove("circle");
}
);

btnrectangle.addEventListener("click", function () {
    document.querySelector(".ShapeDiv p").textContent = "Rectangle";
    shape.classList.add("rectangle");
    shape.classList.remove("square");
    shape.classList.remove("circle");}
);

btncircle.addEventListener("click", function () {
    document.querySelector(".ShapeDiv p").textContent = "Circle";
    shape.classList.add("circle");
    shape.classList.remove("rectangle");
    shape.classList.remove("square");}
)

let menubtn = document.querySelector(".menubtn");
let collapsemenu = document.querySelector(".collapsemenu");
menubtn.addEventListener("click", function () {
    collapsemenu.classList.toggle("Closetoopen");
}
)


// MODAL WINDOW

let closemodal = document.querySelector(".closemodal");
let modal = document.querySelector(".modal");
let modalwindow = document.querySelector(".modalwindow");
let card = document.querySelector(".card");


// collect event to open the modal window

card.addEventListener("click", function () {
    modalwindow.style.display = "block";
})

// collect event to close the modal window
closemodal.addEventListener("click", function () {
    modalwindow.style.display = "none";
})  

//close the modal window when the user clicks outside the modal window
window.addEventListener("click", function (event) {
    if (event.target == modalwindow) {
        modalwindow.style.display = "none";
    }
})