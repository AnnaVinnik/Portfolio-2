"use strict";

const sidebar = document.querySelector(".sidebar");
const sidebarItems = sidebar.querySelectorAll(".nav__item");
const mainSlider = document.querySelector(".main-slider");
const slides = mainSlider.querySelectorAll(".card");
const slidesCount = slides.length;
const container = document.querySelector(".container");

const portfolioSlider = document.querySelector(".portfolio-slider");
const portfolioSlides = portfolioSlider.querySelectorAll("div");

portfolioSlides.forEach( (elem) => {
    elem.addEventListener('click', (event) => {
        removeActive(portfolioSlides);
        event.target.classList.add("active");
    })
});

function removeActive(slides) {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
}


let activeSlide = 0;

sidebarItems.forEach( (elem) => {
    elem.addEventListener('click', changeSlide);
});

function changeSlide(event) {
    activeSlide = Array.from(slides).findIndex(elem => elem.id === event.target.textContent);

    const height = container.clientHeight;
    mainSlider.style.transform = `translateY(-${activeSlide * height}px)`;
}

