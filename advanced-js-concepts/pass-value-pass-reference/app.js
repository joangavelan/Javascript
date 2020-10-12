let name = 'John';
let nameCopy = name; //allocating new memory namecopy

name += ' Doe'; //changing name

console.log(name);
console.log(nameCopy);


let fruits = ['cherry', 'mango'];
let fruitsCopy = fruits; // They're pointing to the same memory adress, one changes, the others change.

fruits.push('apple', 'banana');

console.log(fruits);
console.log(fruitsCopy);