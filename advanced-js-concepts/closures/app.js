// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable)
//         console.log('Inner Variable: ' + innerVariable)
//     }
// }

// const newFunction = outerFunction('outside')
// newFunction('inside')

//Any function that's using any variables outside of its own scope is a closure
// let a = 6;

// let product = function() {
//     let b = 7;   
//     return a * b;
// }

// console.log(product());

//Example 2
//A closure is an inner function that uses its outer function's variables
// function outer() {
//     let varA = 'Hi';

//     function inner() {
//         return varA + ' Bye';
//     }

//     return inner;
// }

// let myFunc = outer();

//Example 3
// function greeting(type) {
//     return function (name) {
//         console.log(`${type}, ${name}!!!`)
//     }
// }

// const sayHello = greeting('Hello')
// const sayHi = greeting('Hi')
// const sayBonjour = greeting('Bounjour')

// sayHello('Joan')
// sayHi('Joan')
// sayBonjour('Joan')


//Example 4 
// function html(tag) {
//     return function(innerValue) {
//         return `<${tag}>${innerValue}</${tag}>`;
//     }
// }

// const p = html('p')
// const h1 = html('h1')
// const a = html('a')

// console.log(h1('This is the title'));
// console.log(p('Content description. This is a nice description.'));
// console.log(a('View more'));


//Example 5
function nameModule() {
    let name = "default"

    return {
        getName: function()  {
            return name
        },
        setName: function(newName) {
            name = newName
        }
    }
}

//Closures store references to outer function's variables
//NOT THE COPY

const mine = nameModule(); //storing the reference to the name variable

console.log(mine.getName())

mine.setName("Joan");
console.log(mine.getName());