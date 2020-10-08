class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name}. I am ${this.age} years old.`;
    }
  }
  
  //Inheritance in es6
  class Programmer extends Person {
    constructor(name, age, language) {
      super(name, age);
      this.language = language;
    }
    
    //method overriding
    greet() {
      return `${super.greet()} I code in ${this.language}.`;
    }
  
    talk() {
      return `My name is ${this.name} and I code in ${this.language}.`;
    }
  }
  
  const newProgrammer = new Programmer("Ana", 23, "C");
  
  console.log(newProgrammer.greet())
  
  //Inheritance
  class Fighter extends Person {
    constructor(name, age, art) {
      super(name, age);
      this.art = art;
    }
  
    fight() {
      return `I teach to fight ${this.art}.`;
    }
  }
  
  const newFighter = new Fighter("Sam", 42, "Jiu Jitsu");
  
  // console.log(newFighter.fight())