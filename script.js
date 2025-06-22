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