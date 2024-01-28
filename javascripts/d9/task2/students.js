let studentList = [];

// document.getElementById('studentForm').addEventListener('submit', function(event) {
//     event.preventDefault();

function addNew() {
    let nameInput = document.getElementById('studname');
    let gradeInput = document.getElementById('studgrade');
    let department = document.querySelector('input[name="Department"]:checked');

    let name = nameInput.value.trim();
    let grade = parseFloat(gradeInput.value);


    let isNameUnique = isUniqueName(name);
    if (!isNameUnique) {
        alert('Student name must be unique.');
        return;
    }
    if (grade < 0 || grade > 100 || isNaN(grade)) {
        alert('Student grade must be between 0 and 100.');
        return;
    }
    let student = {
        name: name,
        grade: grade,
        department: department ? department.value : ''
    };
    studentList.push(student);
    console.log('Student added:', student);


    nameInput.value = '';
    gradeInput.value = '';
    let departmentRadios = document.querySelectorAll('input[name="department"]');
    departmentRadios.forEach(radio => {
        radio.checked = false;
    });


    displayStudents( studentList);



    document.getElementById('filter').addEventListener('change', function() {
        let selectedValue = this.value;
        let filteredStudents = [];

        console.log("filter");

        if (selectedValue === 'failed') {
            filteredStudents = studentList.filter(student => student.grade < 60);
        } else if (selectedValue === 'success') {
            filteredStudents = studentList.filter(student => student.grade >= 60);
        } else {
            filteredStudents = studentList;


       }


       displayStudents(filteredStudents);
    });


}

function isUniqueName(name) {
    return !studentList.some(student => student.name === name);
}

function changeBackgroundColor(department) {
    let color = '';
    switch (department) {
      case 'Math':
        color = 'yellow';
        break;
      case 'Science':
        color = 'lightblue';
        break;
      case 'History':
        color = 'lightgreen';
        break;
      default:
        color = '';
        break;
    }
    let studentable = document.getElementById('studentList')
    studentable.style.backgroundColor = color;
  }

function displayStudents() {
    let studentable = document.getElementById('studentList');
    let deleteButton = document.getElementById('deleteButton');
    
    studentable.innerHTML = '';
    studentList.forEach(student => { 
        let row = document.createElement('tr');
        row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.grade}</td>
          <td> <button id ="button1" ><img src ="delete.png"  /></button><td>
          
        `;
        studentable.appendChild(row);
    });
}



