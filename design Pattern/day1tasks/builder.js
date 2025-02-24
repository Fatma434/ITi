function Shop() {
    this.construct = function (builder) {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

function CarBuilder() {
    this.car = null;

    this.step1 = function () {
        this.car = new Car();
    };

    this.step2 = function () {
        this.car.addParts();
    };

    this.get = function () {
        return this.car;
    };
}

function TruckBuilder() {
    this.truck = null;

    this.step1 = function () {
        this.truck = new Truck();
    };

    this.step2 = function () {
        this.truck.addParts();
    };

    this.get = function () {
        return this.truck;
    };
}

function MotorBuilder() {
    this.motor = null;

    this.step1 = function () {
        this.motor = new Motor();
    };

    this.step2 = function () {
        this.motor.addParts();
    };

    this.get = function () {
        return this.motor;
    };
}

function Car() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 4;
    };

    this.say = function () {
        console.log("I am a " + this.doors + "-door car");
    };
}

function Truck() {
    this.doors = 0;

    this.addParts = function () {
        this.doors = 2;
    };

    this.say = function () {
        console.log("I am a " + this.doors + "-door truck");
    };
}

function Motor() {
    this.type = "";

    this.addParts = function () {
        this.type = "Electric";
    };

    this.say = function () {
        console.log("I am an " + this.type + " motor");
    };
}

function run() {
    var shop = new Shop();
    var carBuilder = new CarBuilder();
    var truckBuilder = new TruckBuilder();
    var motorBuilder = new MotorBuilder();

    var car = shop.construct(carBuilder);
    var truck = shop.construct(truckBuilder);
    var motor = shop.construct(motorBuilder);

    car.say();
    truck.say();
    motor.say();
}

// Run the example
run();