//declaration 
function greet() {
    console.log('Hii');
}

//expression
let greet = function() {
    console.log('Hii');
}


// function alpha() {
//     console.log('alpha speaking!')
// }

// alpha();


// function alpha() {
//     console.log('new alpha speaking')
// }

//this doesn't get hoisted, these are expressions not declarations 
let alpha = function() {
    console.log('alpha speaking')
}

alpha();

var alpha = function() {
    console.log('new alpha speaking')
}

