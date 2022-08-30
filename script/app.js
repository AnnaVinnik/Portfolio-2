"use strict";

const sidebar = document.querySelector(".sidebar");
const mainSlider = document.querySelector(".main-slider");
const slidesCount = mainSlider.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activeSlide = 0;

function changeSlide(direction) {
    if (direction === "up") {
        activeSlide++;
        if (activeSlide === slidesCount) {
            activeSlide = 0;
        }
    } else if (direction === "down") {
        activeSlide--;
        if(activeSlide < 0) {
            activeSlide = slidesCount - 1;
        }
    }


    const height = container.clientHeight;
    mainSlider.style.transform = `translateY(-${activeSlide * height}px)`;
    sidebar.style.transform = `translateY(${activeSlide * height}px)`;
}