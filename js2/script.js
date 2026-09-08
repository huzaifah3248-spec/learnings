class Vehicle {
  #name;
  #brand;
  #model;
  #year;

  constructor(name, brand, model, year) {
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  set year(val) {
    const currentYear = new Date().getFullYear();
    if (typeof val !== "number" || val < 1886 || val > currentYear + 1) {
      throw new RangeError(`Year must be between 1886 and ${currentYear + 1}.`);
    }
    this.#year = val; }

  get year() { return this.#year; }

  set name(val) { this.#name = String(val).trim(); }
  get name() { return this.#name; }

  set brand(val) { this.#brand = String(val).trim(); }
  get brand() { return this.#brand; }

  set model(val) { this.#model = String(val).trim(); }
  get model() { return this.#model; }

  age() {
    return new Date().getFullYear() - this.#year;
  }

  get details() {
    return `Name: ${this.name}, Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Age: ${this.age()} yrs`;
  }

  display() {
    console.log(this.details);
  }
}

class Car extends Vehicle {
  #doors;

  constructor(name, brand, model, year, doors = 4) {
    super(name, brand, model, year); 
    this.doors = doors;
  }

  set doors(val) {
    if (typeof val !== "number" || val < 1) {
      throw new RangeError("Doors must be at least 1.");
    }
    this.#doors = val;
  }
  get doors() { return this.#doors; }

  get details() {
    return `${super.details}, Doors: ${this.doors}`;
  }
}

class Truck extends Car {
  #capacity; 

  constructor(name, brand, model, year, doors, capacity) {
    super(name, brand, model, year, doors); 
    this.capacity = capacity;
  }

  set capacity(val) {
    if (typeof val !== "number" || val <= 0) {
      throw new RangeError("Capacity must be positive.");
    }
    this.#capacity = val;
  }
  get capacity() { return this.#capacity; }

  get details() {
    return `${super.details}, Capacity: ${this.capacity} tons`;
  }
}

const myTruck = new Truck("Titan", "Volvo", "FH16", 2022, 2, 25);
myTruck.display();

const myCar = new Car(prompt("Enter car name:"), prompt("Enter car brand:"), 
prompt("Enter car model:"), parseInt(prompt("Enter car year:")),
 parseInt(prompt("Enter number of doors:")));

myCar.display();
