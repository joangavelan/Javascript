const todoInputEl = document.querySelector(".todo__input");
const todoListlEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");


function addListItem() {
        todoInputEl.addEventListener("keypress", function(event) {
            if(event.keyCode === 13) {
                let task = createListItem(todoInputEl.value);
                // todoListlEl.appendChild(task);
                todoListlEl.insertBefore(task, todoListlEl.childNodes[0]);
                todoInputEl.value = '';
           }  
        })    
}

// This function doesn't work because of bubbling 
// function toggleDone() {
//     for (let elem of todoItemEls) {
//         elem.addEventListener("click", function() {
//             elem.classList.toggle("done");
//         })
//     }
// }


function toggleDone() {
    todoListlEl.addEventListener("click", function(event) {
        if (event.target.classList.contains("todo__item")) {
            event.target.classList.toggle("done");
        };
    })
}

function createListItem(value) {
    let newListItem = document.createElement("li");
    newListItem.textContent = value;
    newListItem.classList.add("todo__item");
    return newListItem;
}


addListItem();
toggleDone();

