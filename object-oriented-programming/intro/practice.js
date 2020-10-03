//Defining function constructor 
function Person(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}

//Prototyping methods
Person.prototype.fullname = function() {
    return `${this.name} ${this.lastname}`;
}

Person.prototype.greeting = function() {
    return `Hey! my name is ${this.fullname()} and I am ${this.age} years old! It's nice to meet you.`;
}

//Instanciation
let person1 = new Person('Joan', 'Gavelán', 23);
let person2 = new Person('Sarah', 'Gavelán', 21);

console.log(person1.greeting());