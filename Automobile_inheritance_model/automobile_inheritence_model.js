function Automobile1(model, color, year, fuelType) {
    this.model = model
    this.color = color
    this.year = year
    this.fuelType = fuelType
}

Automobile1.prototype.modelType = function () {
    console.log("Latest model");
}

Automobile1.prototype.color = function () {
    console.log("dark color");
}

Automobile1.prototype.automobilefuelType = function () {
    console.log("Petrol type");
}

function Automobile2(model, color, year, fuelType, engine) {
    Automobile1.call(this, model, color, year, fuelType)
    this.engine = engine
}

Object.setPrototypeOf(Automobile2.prototype, Automobile1.prototype)

Automobile2.prototype.startEngine = function () {
    // new properties/methods added
    console.log("Engine start")
}

Automobile2.prototype.stopEngine = function () {
    console.log("Engine stop");
}

let Automobile2FirstVehicle = new Automobile2("Toyota", "Camry", 2022, "Silver", "Petrol", "300cc")

console.log(Automobile2FirstVehicle)
Automobile2FirstVehicle.automobilefuelType();