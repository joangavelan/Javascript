const modalEl = document.querySelector(".modal");
const openEl = document.querySelector(".trigger");
const closeEl = document.querySelector(".close");


function main() {
    openEl.addEventListener("click", function() {
        modalEl.classList.add("open");
    })
    
    closeEl.addEventListener("click", function() {
        modalEl.classList.remove("open");
    })

    window.addEventListener("click", function(event) {
        if(event.target === modalEl) {
            modalEl.classList.remove("open");
        }
    })
}

main();



