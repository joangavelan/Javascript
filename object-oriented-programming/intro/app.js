//function constructor 
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.stats = function() {
    return `${this.brand} ${this.model}!`;
}

Car.prototype.drive = function() {
    return `I'm driving my new ${this.stats()}!`;
}


let car1 = new Car('Lambo', 'Aventador'); //instance
let car2 = new Car('Toyota', 'Camry');
let car3 = new Car('Nissan', 'Sentra');

// console.log(car3.drive());

// console.log(car3);

// console.log(car1.stats());
// console.log(car2.stats());
// console.log(car3.stats());   

