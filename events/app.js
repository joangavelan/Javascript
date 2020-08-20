const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");

function clicked() {
    console.log("this button have been double clicked")
    console.log("yeeyyy")
}

buttonEl.addEventListener("dblclick", clicked)

inputEl.addEventListener("input", function() {
    console.log("You are typing something");
})

inputEl.addEventListener("focus", function() {
    console.log("About to type something");
})

buttonEl.removeEventListener("dblclick", clicked)  
