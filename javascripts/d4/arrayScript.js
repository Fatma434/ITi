 let number =[2,3,1,2,7,2,8,4,3,6,10,9,12];
//1.1 

 let descSorting =number.sort((a,b)=>(b-a));

 //1.2

 let filteredItem = number.filter (number=> number>5);

 
 let filteredItem2 = number.find (number=> number>5);
 console.log(filteredItem);

 console.log(filteredItem2);



 //1.4



 let coppyArr = Array.from(number , (item =>item*5));
 console.log(number);

 console.log(coppyArr);





 //1.5


let unique_array = number.filter(function unqie (item,index){
    return  number.indexOf(item) ==index;
})


console.log(unique_array);


//1.6
  
function coutEeven(array){
    let evebCount=0;
    let evenArr =[];

 for (let index=0 ; index<array.length; index++){
    if(array[index] % 2 === 0){

        evebCount++;
         evenArr.push(array[index]);

         
        

        
    }

}








    
    return  evenArr.join('*') ;



 }

  

let Arrsize =number.length;
console.log(Arrsize);

 
  console.log( coutEeven(number));















  // 3



//   function shuffleArray(array) {
//     const shuffledArray = [...array];
  
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//       const randomIndex = Math.floor(Math.random() * (i + 1));
//       [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
//     }
  
//     return shuffledArray;
//   }
  
  // Example usage


//   function shuffleArray(array){

  
//     let newArray =array.sort((a,b)=>(a-b));

let shhuffle = Math.floor(Math.random()*(i+1));
//     return newArray;
console.log(array[i])
//   }


//   console.log(shuffleArray(number));
  
 
 
//  


function shuffleArray2(array){

    let 
  
  for (let i= array.length-1 ;i>0 ;i--)
  {
    let shhuffle = Math.floor(Math.random()*(i+1));
    return shhuffle;
  }
  


    
  }

  console.log(shuffleArray2(number));


















  //3


  function generateNumberArray(min, max, length) {
    if (length % 2 !== 0) {
      throw new Error('Length must be an even number.');
    }
  
    const range = max - min + 1;
    if (range < length / 2) {
      throw new Error('Range is not sufficient to generate the requested array.');
    }
  
    const numbers = [];
    const availableNumbers = Array.from({ length: max - min + 1 }, (_, index) => index + min);
  
    for (let i = 0; i < length / 2; i++) {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      const number = availableNumbers.splice(randomIndex, 1)[0];
      numbers.push(number, number);
    }
  
    return numbers;
  }

  console.log(generateNumberArray(2,10 ,6));













  // 5 









//   const numberStudent =4 ;


//   const numberCourses= 5;



//   const grades = [];



//   for(let i=0 ; i<numberStudent; i++){

//     const studenttGrades =[];
//     for(let j=0 ; j<numberCourses ; j++){
//         const grade = parseFloat(prompt(`enter the grade for student ${i+1} in course ${j+1}:`));
//         studenttGrades.push(grade);
//     }
// grades.push(studenttGrades);

//     }

//   }

// Define the number of students and courses
const numStudents = 4;
const numCourses = 5;

// Create an empty 2D array
const grades = [];

// Fill the array with grades
for (let i = 0; i < numStudents; i++) {
  const studentGrades = [];
  for (let j = 0; j < numCourses; j++) {
    const grade = parseFloat(prompt(`Enter the grade for student ${i + 1} in course ${j + 1}:`));
    studentGrades.push(grade);
  }
  grades.push(studentGrades);
}

// Display the average grade for each course
const courseAverages = [];
for (let j = 0; j < numCourses; j++) {
  let sum = 0;
  for (let i = 0; i < numStudents; i++) {
    sum += grades[i][j];
  }
  const average = sum / numStudents;
  courseAverages.push(average);
  console.table(`Average grade for course ${j + 1}: ${average.toFixed(2)}`);
}

// Display the total grades for each student
for (let i = 0; i < numStudents; i++) {
  let sum = 0;
  for (let j = 0; j < numCourses; j++) {
    sum += grades[i][j];
  }
  console.log(`Total grades for student ${i + 1}: ${sum}`);
}


