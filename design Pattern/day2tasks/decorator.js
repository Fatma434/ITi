class Teacher {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Teacher: ${this.name}`);
    }
}

function addDynamicProperties(teacher, salary, nationality, street) {
    const decoratedTeacher = Object.create(Teacher.prototype);

    for (let key in teacher) {
        if (teacher.hasOwnProperty(key)) {
            decoratedTeacher[key] = teacher[key];
        }
    }

    decoratedTeacher.salary = salary;
    decoratedTeacher.nationality = nationality;
    decoratedTeacher.street = street;

    return decoratedTeacher;
}

const baseTeacher = new Teacher("fatma");
const decoratedTeacher = addDynamicProperties(baseTeacher, 20000, "EGP", "main street");

baseTeacher.display();
console.log("\nOriginal Teacher:", baseTeacher);

console.log("\nDecorated Teacher:");
decoratedTeacher.display();
console.log("Salary:", decoratedTeacher.salary);
console.log("Nationality:", decoratedTeacher.nationality);
console.log("Street:", decoratedTeacher.street);