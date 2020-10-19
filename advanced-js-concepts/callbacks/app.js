//A callback function is just a function that is passed into another function as an argument and this "passed-in" function is invoked in the body of the other function.

// function first(name) {
//     console.log(`Hey, ${name}`)
// }

// function second(alias, callback) {
//     callback(alias)
// }


// second('Joan', function(name) {
//     console.log(`Hey, ${name}`)
// });


//Example 1 

// const greeter = (name, language) => {
//     if (language === 'english') {
//         console.log(`Hello, ${name}!`)
//     }

//     else if (language === 'spanish') {
//         console.log(`Hola, ${name}!`)
//     }

//     else if (language === 'japanese') {
//         console.log(`Konichiwa, ${name}!`)
//     }    

//     else {
//         console.log('idk')
//     }
// }

// greeter('David', 'japanese')


// const greeter = (name, callback) => {
//     callback(name);
// }

// const english = (name) => {
//     console.log(`Hello, ${name}`);
// }

// const spanish = (name) => {
//     console.log(`Hola, ${name}`);
// }

// const french = (name) => {
//     console.log(`Bonjour, ${name}`);
// }


// greeter('John', english)


//Example 2

// const square = (arr) => {
//     let result = [];

//     for(let item of arr) {
//         result.push(Math.pow(item, 2));
//     }

//     return result;
// }

// const doble = (arr) => {
//     let result = [];

//     for(let item of arr) {
//         result.push(item * 2);
//     }

//     return result;
// }

// const squareRootMap = (arr) => {
//     let result = [];

//     for(let item of arr) {
//         result.push(Math.sqrt(item));
//     }

//     return result;
// }

// const uppercaseMap = (arr) => {
//     let result = [];

//     for(let item of arr) {
//         result.push(item.toUpperCase());
//     }

//     return result;
// }

// console.log(uppercaseMap(['John', 'Stacey']));

const modifier = (arr, callback) => {
    let result = [];

    for(let item of arr) {
        result.push(callback(item));
    }

    return result;
}

const double = (item) => item * 2;

const pow = (item) => Math.pow(item, 2);

const square = (item) => Math.sqrt(item);

console.log(modifier([1, 2, 3], pow));

//Another way
console.log(modifier(['a', 'p', 'p'], function(item) {
    return item.toUpperCase();  x
}));