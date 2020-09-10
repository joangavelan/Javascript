const loadingBarItem = document.querySelector(".loading-bar__item");
const button40 = document.getElementById("40");
const button60 = document.getElementById("60");
const button100 = document.getElementById("100");

button40.addEventListener("click", function() {
    let width = 1;
    let loadingBar = setInterval(function() {
        if (width >= 40) {
            clearInterval(loadingBar);
        } else {
            width++;
            loadingBarItem.style.width = width + '%';
        }
    }, 15)
});

button60.addEventListener("click", function() {
    let width = 1;
    let loadingBar = setInterval(function() {
        if (width >= 60) {
            clearInterval(loadingBar);
        } else {
            width++;
            loadingBarItem.style.width = width + '%';
        }
    }, 15)
});

button100.addEventListener("click", function() {
    let width = 1;
    let loadingBar = setInterval(function() {
        if (width >= 100) {
            clearInterval(loadingBar);
        } else {
            width++;
            loadingBarItem.style.width = width + '%';
        }
    }, 15)
});


// let width = 1;
// let loadingBar = setInterval(function() {
//     if (width >= 100) {
//         clearInterval(loadingBar);
//     } else {
//         width++;
//         loadingBarItem.style.width = width + '%';
//     }
// }, 15)



// let count = 0;

// let counter = setInterval(function() {
//     if (count === 10) {
//         clearInterval(counter)
//     } else {
//         count++;
//         console.log(count);
//     }
// }, 1000)