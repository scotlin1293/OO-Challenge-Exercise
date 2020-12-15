// PART ONE //
class Vehicle {
  constructor(make, model, year) {
    if (!Number.isFinite(year) || year <= 0) {
        throw new Error(`${year} is not a correct year!!!`);
    }
    this.make = make;
    this.model = model;
    this.year = year; 
  }
  honk() {
    return "beep";
  }
  toString() {
      return `This vehicle is a ${this.year} ${this.make} ${this.model}!`
  }
}

// PART TWO //

class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numwheels = 4;
      
    }
}


// PART THREE //

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numwheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

//PART FOUR //

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newWheels) {
        if (!Vehicle.prototype.isPrototypeOf(newWheels)) {
            return "Only vehicles are allowed in here!!";
        }
        if (this.vehicles.length >= capacity) {
            return "Sorry, we're full";
        }
        this.vehicles.push(newWheels);
        return "Vehicle added!";
    }
}