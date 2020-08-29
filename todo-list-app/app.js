const todoInputEl = document.querySelector(".todo__input");
const todoListlEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");


function addListItem() {
        todoInputEl.addEventListener("keypress", function(event) {
            if(event.keyCode === 13 && todoInputEl) {
                let task = storageItem(todoInputEl.value);
                todoListlEl.appendChild(task);
                todoInputEl.value = '';
           }  
        })
     
}

function storageItem(value) {
    let newListItem = document.createElement("li");
    newListItem.textContent = value;
    newListItem.classList.add("todo__item");
    return newListItem;
}


addListItem();

