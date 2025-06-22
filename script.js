let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
})