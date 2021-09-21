const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar");
const navLink = document.querySelectorAll(".nav-bar-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// slider - section

const slider = document.querySelector('.slider');
const left = document.querySelector('.left');
const slide = document.querySelector('.slide')
const right = document.querySelector('.right');
var sectionIndex = 0;
right.addEventListener('click', function () {
    // sectionIndex = (sectionIndex < 2) ?  sectionIndex + 1 : 2;

    if (sectionIndex = sectionIndex < 2) {
        sectionIndex + 1;
    }
    else {
        sectionIndex + 2;
    }
    slider.style.transform = "translate(" + (sectionIndex = sectionIndex + 1) * -33 + "%)";
});
left.addEventListener('click', function () {
    slider.style.transform = "translate(0%)";

});