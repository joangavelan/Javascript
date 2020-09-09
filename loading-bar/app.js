const loadingBarItem = document.querySelector(".loading-bar__item");


let width = 1;
let loadingBar = setInterval(function() {
    if (width >= 100) {
        clearInterval(loadingBar);
    } else {
        width++;
        loadingBarItem.style.width = width + '%';
    }
}, 15)














// let count = 0;

// let counter = setInterval(function() {
//     if (count === 10) {
//         clearInterval(counter)
//     } else {
//         count++;
//         console.log(count);
//     }
// }, 1000)