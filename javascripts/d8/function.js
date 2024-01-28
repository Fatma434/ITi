// var Car = {
//     model: 'Toyota', //object has properties
//     color: 'Red',
//     move: function() {},
//     beep: function(r) { alert(r) } //and methods
// };





// // function Human() {
// //     this.name; // this refers to the caller object
// //     this.age;
// //     this.sayName = function() // sayName function in human
// //         { alert(this.name); }
// // }

// var obj = new Human();
// obj.name = "Mohamed";
// obj.age = 22;
// obj.sayName();

// var point = { x: 0, y: 0 };
// var point2 = { x: point.x, y: point.y + 1 };

// JSON.stringify({ name: "eman", age: 20 })



// // class Person {
// //     constructor(name, age) {
// //         this.name = name;
// //         this.age = age;
// //     }
// //     sayName() {
// //         console.log(this.name);
// //     }
// // };


// // let person = new Person("Mona", 30);

// let Person = Class

// {
//     constructor(namee, age) {
//         this.namee = namee;
//         this.age = age;
//     }
//     sayName() { console.log(this.namee); }
// };

// let person = new Person("Mona", 30);
// console.log(person instanceof Person); //true
// console.log(typeof Person);


var Ball = {
    top_postion: 10,
    left_postion: 20,
    radius: 9,
    color: "red",

    // calculateArea: function() {
    //     let ballArea = Math.PI * Ball.radius * Ball.radius;
    //     return "the area =" + ballArea;
    // },



    toString: function() {

            return ` ball_dimensions = top:${this.left_postion}, left:${this.top_postion}, raduis:${this.radius} ,color:${this.color} `;

        } //





};


console.log(Ball["color"]);
console.log(Ball.color);

Ball.calculateArea = () => Math.PI * Ball.radius * Ball.radius;

console.log(Ball.calculateArea());



let balls = [



    {
        top: 50,
        left: 100,
        radius: 20,
        color: 'red',
        calculateArea: function() {
            return Math.PI * this.radius * this.radius;
        }
    },
    {
        top: 30,
        left: 80,
        radius: 15,
        color: 'blue',
        calculateArea: function() {
            return Math.PI * this.radius * this.radius;
        }
    },
    {
        top: 70,
        left: 120,
        radius: 25,
        color: 'green',
        calculateArea: function() {
            return Math.PI * this.radius * this.radius;
        }
    }
];

//using for 
// for (let i = 0; i < balls.length; i++) {
//     let newBall = balls[i];

//     console.log(`Color: ${newBall.color}, Area: ${newBall.calculateArea()}`);
// }



//using for each
// console.log('Colors and Areas:');
// balls.forEach(ball => {
//     console.log(`Color: ${ball.color}, Area: ${ball.calculateArea()}`);
// });


//using (for in) 

for (i in balls) {

    let ball = balls[i];
    console.log(`Color: ${ball.color}, Area: ${ball.calculateArea()}`);
}



balls.sort((a, b) => {
    if (a.top !== b.top) {
        return a.top - b.top;

    } else {
        a.left - b.left;
    }
});
console.table(balls);


// balls.sort((a, b) => {
//     if (a.top !== b.top) {
//         return a.top - b.top;
//     } else {
//         return a.left - b.left;
//     }
// });

// console.table(balls);






























var x =   3 ;
function print(){
    var x= 4;
    console.log(x);
}

console.log(x);

print()



const maxItems = 30;
if (true) { 
const maxItems = 5;
console.log(maxItems);
// more code
}

console.log(maxItems);



var message = "Hello!";
let agef = 25;
// each of these throws an error
const message = "Goodbye!";
const age = 30;