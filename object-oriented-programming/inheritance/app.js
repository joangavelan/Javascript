function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function () {
    return `Hello my name is ${this.name}. I am ${this.age} years old.`;
  }
  
  
  function Programmer(name, age, language) {
    Person.call(this, name, age);
    this.language = language;
  } 
  
  Programmer.prototype = Object.create(Person.prototype);
  Programmer.prototype.constructor = Programmer;
  
  function Fighter(name, age, art) {
    Person.call(this, name, age);
    this.art = art;
  }
  
  Fighter.prototype = Object.create(Person.prototype);
  Fighter.prototype.constructor = Fighter;
  
  let newMan = new Person("Joan", 23);
  let newProgrammer = new Programmer ("Ana", 21, "Java");
  let newFighter = new Fighter("John", 33, "Karate");
  
  
  console.log(newMan.constructor)
  console.log(newProgrammer.constructor)
  console.log(newFighter.constructor)