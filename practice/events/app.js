const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");


function clicked() {
    return alert("You just clicked this button");
}

function focusOut() {
    return alert("Don't forget to type something");
}


buttonEl.addEventListener("mouseup", clicked)  
inputEl.addEventListener("focusout", focusOut)


