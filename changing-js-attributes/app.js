const divEl = document.querySelector("div");

console.log(divEl.getAttribute("class"));
divEl.setAttribute("id", "newID secondID thirID");
// divEl.setAttribute("id", "totalNewID");
console.log(divEl.getAttribute("id"));

divEl.removeAttribute("id");