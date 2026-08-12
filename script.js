const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.onclick = function () {
    nav.classList.toggle("show-menu");
};
