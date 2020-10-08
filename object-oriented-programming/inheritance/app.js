//Person 
//constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
//craeting method in the prototype
Person.prototype.greet = function() {
  return `Hello my name is ${this.name}. I am ${this.age} years old.`;
}

//Programmer
//constructor  
function Programmer(name, age, language) {
Person.call(this, name, age);
this.language = language;
} 

//inheriting person's constructor prototype 
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;
//overriding the greet method
Programmer.prototype.greet = function() {
return `${Person.prototype.greet.call(this)} I code in ${this.language}.`;
}

//Fighter
//constructor
function Fighter(name, age, art) {
Person.call(this, name, age);
this.art = art;
}

//inheriting person's constructor prototype 
Fighter.prototype = Object.create(Person.prototype);
Fighter.prototype.constructor = Fighter;
//overriding the greet method
Fighter.prototype.greet = function() {
return `${Person.prototype.greet.call(this)} I practice ${this.art}.`;
}

//instantiation
let newMan = new Person("Joan", 23);
let newProgrammer = new Programmer ("Ana", 21, "Java");
let newFighter = new Fighter("John", 33, "Karate");


console.log(newProgrammer.greet())

// console.log(newMan.constructor)
// console.log(newProgrammer.constructor)
// console.log(newFighter.constructor)