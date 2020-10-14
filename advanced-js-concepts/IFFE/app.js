//IFFE
// (function greet() {
//     console.log('Hello');
// })()

//This doesn't pollute the global scope
(function () {
    var a = "Joan";
    function add(a, b) {
        return a + b;
    }
})()

//This also doesn't pollute the global score because let and const varialbes are block scope 
{
    letea = "Joan";

   let add = function() {
        return a + b;
    }
} 