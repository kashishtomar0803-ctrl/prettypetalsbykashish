const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("mobile-menu");
});
