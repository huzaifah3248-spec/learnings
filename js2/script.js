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
    if (typeof val !== "number" || val < 1900 || val > currentYear + 1) {
      throw new RangeError(`Year must be between 1900 and ${currentYear + 1}.`);
    }
    this.#year = val;
  }
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
    return this.details;
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


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("vehicleForm");
  const vehicleType = document.getElementById("vehicleType");
  const capacityContainer = document.getElementById("capacityContainer");
  const capacityInput = document.getElementById("capacity");
  const outputDisplay = document.getElementById("outputDisplay");

  vehicleType.addEventListener("change", (e) => {
    const isTruck = e.target.value === "1";
    capacityContainer.style.display = isTruck ? "flex" : "none";
    capacityInput.required = isTruck;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    try {
      const type = parseInt(vehicleType.value, 10);
      const name = document.getElementById("name").value;
      const brand = document.getElementById("brand").value;
      const model = document.getElementById("model").value;
      const year = parseInt(document.getElementById("year").value, 10);
      const doors = parseInt(document.getElementById("doors").value, 10);

      let createdVehicle = null;

      switch (type) {
        case 0:
          createdVehicle = new Car(name, brand, model, year, doors);
          break;
        case 1: {
          const capacity = parseFloat(capacityInput.value);
          createdVehicle = new Truck(name, brand, model, year, doors, capacity);
          break;
        }
        default:
          throw new Error("Invalid vehicle type selected.");
      }

      const details = createdVehicle.display();
      outputDisplay.classList.remove("placeholder-text");
      outputDisplay.innerHTML = `<span class="success-badge">✓ [${createdVehicle.constructor.name}]</span><br>${details}`;

    } catch (err) {
      outputDisplay.classList.remove("placeholder-text");
      outputDisplay.innerHTML = `<span class="error-badge">✗ Validation Error:</span> ${err.message}`;
      console.error(err);
    }
  });
});