const paragraphEl = document.querySelector("p");
const bodyEL = document.querySelector("body");
const switchEl = document.querySelector("button");

paragraphEl.classList.add("red-giant", "random");
paragraphEl.classList.remove("random");

switchEl.onclick = function() {
    bodyEL.classList.toggle("on");
}