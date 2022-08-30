"use strict";

const sidebar = document.querySelector(".sidebar");
const sidebarItems = sidebar.querySelectorAll(".nav__item");
const mainSlider = document.querySelector(".main-slider");
const slides = mainSlider.querySelectorAll("div");
const slidesCount = slides.length;
const container = document.querySelector(".container");

let activeSlide = 0;

sidebarItems.forEach( (elem) => {
    elem.addEventListener('click', changeSlide);
});

function changeSlide(event) {
    activeSlide = Array.from(slides).findIndex(elem => elem.id === event.target.textContent);

    // if (direction === "up") {
    //     activeSlide++;
    //     if (activeSlide === slidesCount) {
    //         activeSlide = 0;
    //     }
    // } else if (direction === "down") {
    //     activeSlide--;
    //     if(activeSlide < 0) {
    //         activeSlide = slidesCount - 1;
    //     }
    // }


    const height = container.clientHeight;
    mainSlider.style.transform = `translateY(-${activeSlide * height}px)`;
    // sidebar.style.transform = `translateY(${activeSlide * height}px)`;
}