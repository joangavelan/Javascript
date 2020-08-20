const todoEl = document.querySelector(".todo");
const todosEl = document.getElementsByClassName("todo__item");

// console.log(todosEl[2].parentNode.childNodes[3].childNodes[2]);

//CHILDREN
//Nodes
console.log(todoEl.childNodes)
console.log(todoEl.firstChild)
console.log(todoEl.lastChild)

//Elements
console.log(todoEl.children)
console.log(todoEl.firstElementChild)
console.log(todoEl.lastElementChild)

//SIBLINGS 
//Nodes
//previousSibling
//nextSibling

//Elements
//previousElementSibling
//nextElementSibling
console.log(todoEl.firstElementChild.nextElementSibling.nextElementSibling.previousElementSibling)


