function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.acclerate = function () {
    this.speed = this.speed + 5;
    console.log(this.speed);
}
Vehicle.prototype.brake = function () {
    this.speed = this.speed - 5;
    console.log(this.speed);
}
Vehicle.prototype.refuel = function () {
    console.log("Vehicle is refueling");
}

function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType)
    this.numberOfWheels = numberOfWheels;
}

Car.prototype.honk = function () {
    console.log("Honking sound");
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

let myCar = new Car("Hundai", "I10", 100, "Petrol", "Four");

console.log(myCar);
myCar.acclerate();
myCar.brake();
myCar.refuel();
myCar.honk();

function Aeroplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

Object.setPrototypeOf(Aeroplane.prototype, Car.prototype);

Aeroplane.prototype.takeOff = function () {
    console.log("Airplane is taking off.");
}

let myAeroplane = new Aeroplane("Boeing", "747", 300, "Jet Fuel", 4, true);

console.log(myAeroplane);
myAeroplane.acclerate();
myAeroplane.brake();
myAeroplane.refuel();
myAeroplane.honk();
myAeroplane.takeOff();