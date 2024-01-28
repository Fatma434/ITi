import {
    Car
} from "./car.js";


export class FlyingCar extends Car {
    constructor(model, year, canFly) {
        super(model, year)
        this.canFly = canFly;
    }
    toprint() {
        let data = super.toString();
        let canfly = this.canFly ? 'I can fly ' : `I can't fly`;
        return `data:${data},flyStatue:${canfly}`;
    }
}