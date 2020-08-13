//Accessing single elements
console.log(document.getElementById("logo"));

let logoEl = document.getElementById("logo");
console.log(logoEl);

console.log(document.querySelector(".chore"));


//Accessing multiple elements
//By Class
let choresEl = document.getElementsByClassName("chore");
console.log(choresEl);

//By Tags
let choresOpt = document.getElementsByTagName("li");
console.log(choresOpt);

let headingEl = document.getElementsByTagName("h2");
console.log(headingEl);

//All
let paragraphEl = document.querySelectorAll(".chore, .random-paragraphs");
console.log(paragraphEl);