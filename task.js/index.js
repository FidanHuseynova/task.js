class Cars {
    constructor(brand, model, colour, year, speed, fuelCapacity, fuelFor1Km, currentFuel) {
        this.brand = brand;
        this.model = model;
        this.colour = colour;
        this.year = year;
        this.speed = speed;
        this.fuelCapacity = fuelCapacity;
        this.fuelFor1Km = fuelFor1Km;
        this.currenFuel = currentFuel
    }
    showInfo() {
        return this.brand + " " + this.model + " " + this.colour
    }
    daxilEdilen(fuel) {
        if (this.currentFuel + fuel > thisfuelCapacity) {
            console.log("yeteri qeder yer yoxdu");
        } else {
            this.currentFuel += fuel;
            console.log("yanacaq daxil edildi");
        }
    }
    drive(distance) {
        const yanacaqFuel = this.fuelFor1Km * distance;
        if (yanacaqFuel > this.currentFuel) {
            console.log("yeteri qeder yanacaq yoxdu");
        } else {
            console.log("unvana catdiq");
            this.currentFuel -= yanacaqFuel;
            this.km += distance;
        }
    }
}

let car = new Cars("Mercedes", "Sedan", "Green", "2012", "270", "60", "37800", "0.2", "80")
car.AddFuel(20);
car.drive(100);
console.log(car);
