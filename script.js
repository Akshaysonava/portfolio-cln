'use strict';


// Preloader

const preLoader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded",  ()  => { 
    preLoader.classList.add("loaded");
    document.body.classList.add("loaded");
})


//add event on multiple elements 

const addEventOnElements = function (elements, eventType, callBack) {
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callBack); 
    }
}


//  mobile navbar toogle 
const navbar = document.querySelector("[data-navbar]");
const navTogglers  = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
})

addEventOnElements(navLinks, "click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-active");
});

// Headers active 

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
})

//?  Element Tilt effect 

const tiltElements =  document.querySelectorAll("[data-tilt]");

const initTilt = function (event)  {

    //get tilt element cemnter position 
    const centerX = this.offsetWidth / 2;
    const centerY = this.offsetHeight / 2;

    const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
    const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

     this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg) `

}

addEventOnElements(tiltElements, "mousemove", initTilt);

addEventOnElements(tiltElements, "mouseout", function () {
    this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
})


//? exhibition

const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {

  if (!(lastActiveTabBtn === this)) {

    lastActiveTabBtn.classList.remove("active");
    lastActiveTabContent.classList.remove("active");

    this.classList.add("active");
    lastActiveTabBtn = this;

    const currentTabContent = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);

    currentTabContent.classList.add("active");
    lastActiveTabContent = currentTabContent;

  }

}

addEventOnElements(tabBtns, "click", filterContent);

// Custom cursor 

const cursor = document.querySelectorAll("[data-cursor]");
const hoverdElement = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

window.addEventListener("mousemove" , (event) => {

    const posX = event.clientX;
    const posY = event.clientY;

    // cursor Dot Position 
    cursor[0].style.left = `${posX}px`
    cursor[0].style.top = `${posY}px`

    //cusrsor Outline Position 
    setTimeout(() => {
        cursor[1].style.left = `${posX}px`
        cursor[1].style.top = `${posY}px`
    }, 80);
})


//add hoverd class when mousemove on HoverElements 
addEventOnElements(hoverdElement, "mousemove", () => {
    for(let i =0, len = cursor.length; i< len; i++){
        cursor[i].classList.add("hovered");
    }
});

//removed hoverd class when mousemove on HoverElements 
addEventOnElements(hoverdElement, "mouseout", () => {
    for(let i =0, len = cursor.length; i< len; i++){
        cursor[i].classList.remove("hovered");
    }
});





















