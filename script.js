let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
})

let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
})

window.onscroll = () => {
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
}



let slides=document.querySelectorAll(".home .slide");
let index=0;

function next(){
    slides[index].classList.remove("active");
    index=(index+1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove("active");
    index=(index-1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}