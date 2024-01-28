//import "./car.js";

import { FlyingCar } from "./flyingcar.js";


let flying1 = new FlyingCar("pmw ", 2003, true);
console.log(flying1);
console.log(flying1.toprint());


let flying2 = new FlyingCar("toyota ", 2020, false);
console.log(flying2);
console.log(flying2.toprint());