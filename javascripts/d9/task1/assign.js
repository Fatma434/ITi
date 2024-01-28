// let image_male = document.querySelector(".male");
// let image_female = document.querySelector(".female");
class Person {
    static#count = 0;
    #name;
    #profile_picture;

    constructor(name, gender, profile_picture) {
        this.name = name;
        this.gender = gender;
        this.profile_picture = profile_picture;
        Person.#count++;
    }

    static get count() {
        return Person.#count;
    }




    set name(value) {

        let full_name = value.split(' ');
        if (full_name.length > 1) {
            for (let i in full_name) {
                // full_name.push(result[x].charAt(0).toUpperCase() + result[x].slice(1));
                full_name[i] = full_name[i][0].toUpperCase() + full_name[i].slice(1);
            }
            this.#name = full_name.join(' ');
        } else {
            throw Error('Invalid! , Enter Full Name');
        }

    }

    get name() {
        return this.#name;
    }




    set profile_picture(value) {
        if (value == '') {
            if (this.gender == 'male') {
                this.#profile_picture = 'male.png';
            } else if (this.gender == 'Female') {
                this.#profile_picture = 'female.png';
            }
        } else {
            this.#profile_picture = this.#profile_picture;
        }
        return this.#profile_picture;
    }

    get profile_picture() {
        return this.#profile_picture;

    }




}



class Employee extends Person {
    constructor(name = '', gender = '', profile_picture = '', salary = 0, language = '') {
        super(name, gender, profile_picture);
        this.salary = salary;
        this.language = language;
    }
    toString() {
        return ` ${this.name}  ${this.salary}`
    }
    Show_data() {
        let container = document.createElement('div');

        container.innerHTML = `
        <img src="${this.profile_picture}" alt="" style="width:320px ; height:300px " >
            <p>${this.name}</p>
            <p>${this.gender}</p>
             <p>${this.salary}</p>
            <p>${this.language}</p>
        `;
        // container.style.border='solid black 1px';
        container.style.marginBottom = '10px';
        container.style.marginRight = '10px';
        container.style.width = '42%';
        container.style.textAlign = 'center';
        container.style.float = 'left';


        document.body.appendChild(container);
    }
}

let emp1 = new Employee('ahmed ali', 'male', '', 5000, 'English').Show_data();
let emp2 = new Employee('mona mohamed', 'Female', '', 7000, 'Frensh').Show_data();





// class employee extends Person{
//     constructor(fullName = '', gender = '' ,profilePicture = '', salary = 0, language = ''){
//         super(fullName , gender , profilePicture);
//         this.salary = salary;
//         this.language = language;
//     }
//     toString(){
//         return `${this.fullName} ${this.salary}`
//     }
//     displayPerson() {
//         let personDiv = document.createElement('div');
//         personDiv.innerHTML = `
//             <img src="${this.profilePicture}" alt="Profile Picture">
//             <p>${this.fullName}</p>
//             <p>${this.gender}</p>
//             <p>${this.salary}</p>
//             <p>${this.language}</p>
//         `;
//         personDiv.style.border='solid black 1px';
//         personDiv.style.marginBottom='10px';
//         personDiv.style.marginRight='10px';
//         personDiv.style.width='40%';
//         personDiv.style.textAlign='center';
//         personDiv.style.float='left';



//         document.body.appendChild(personDiv);
//     }
// }




// let person_1 = new Person("ahmed Mohamed", "Male", "mmm.png");
// console.log(person_1.name);
// person_1.name = "ali Mohamed";


// person_1.id;   // get
// person_1.id=30; //set









// let Employee1 = new Employee('Ahmed' , "male"  , 10000, 'English');
// console.log(Employee1.toString());