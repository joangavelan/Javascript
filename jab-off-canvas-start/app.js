const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarsEl = document.getElementsByTagName("span");


function click() {
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    
    for (let item of hamburgerBarsEl) {
        item.classList.toggle("change");
    }
}

function toggleNav() {
    navTriggerEl.addEventListener("click", click)
}
toggleNav();