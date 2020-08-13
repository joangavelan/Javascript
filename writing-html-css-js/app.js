console.log("hello world");

for (i = 0; i < 10; i++) {
    console.log("increasing " + i);
}

let h1Elem = document.querySelector("h1");

h1Elem.style.color = "blue";


let content = document.createElement("p");

content.innerHTML = "hey this is the content inside of the p tag";

document.querySelector("body").appendChild(content);