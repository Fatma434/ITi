






////******************************  lab 3 *********************************8 */







// function calcAverage ( scroe1 ,score2 ,score=43){

//     let averScore  = (scroe1+score2+score)/3

//     return  ` ${averScore}`  ;



// }


// function checkWinne ( avrscore1 ,averScore2 ){

//     if(avrscore1>averScore2)
//     {
//         console.log("team 1 is winner");
//     }
//     else{
//         console.log("team 2 is winner");

//     }
// }


// //2


// let num1  =  prompt("please enter your first number ");

// if( isNaN(num1) || num1 ==""){

   
//    prompt("please enter your first number ");

// }

// let num2 = prompt("please enter your second number ");

// if( isNaN(num2) || num2 ==""){

   
//    prompt("please enter your second number ");

// }

// num1 = parseFloat(num1);
// num2 = parseFloat(num2);
// const  sum = num1 +num2;





// //3





// // let count =prompt("How many numbers do you want to sum?");

// // if( isNaN(count) || count ==""){

   
// //    prompt("How many numbers do you want to sum?");

// // }
// // count = parseInt(count);

// // let sum = 0;



// // for (let i = 0; i < count; i++) {
// //     let number;
// //     do {
// //       num = prompt("Enter number " + (i + 1) + ":");
// //     } while (isNaN(number) || number === "");
  
// //     sum += parseFloat(number);
// //   }

// //   console.log("The sum is: " + sum);






// // 4

// // sucess calling beforedefintion
// //f 

// //expection not defined
// //console.log(value_4 ,value_5);

// //printVariable(2,3,5);
// //g

// //expection not defined local 
// //console.log(value_4 ,value_5);

// //h
// let value_4=40;


//  function printVariable( value1 ,value2 ,value3){
// console.log("values is:",value1,value2 ,value3);
// // expectiom cannot acces before defination  in let case 


// // undefined 
// console.log(value_4);

// var  value_4 =3 ;
// var value_5 =5;


//  }
// printVariable(2,3,4);





// //  function printVariables() {
// //     for (let i = 0; i < arguments.length; i++) {
// //       console.log(arguments[i]);
// //     }
// // }


// // printVariables(3,5,5,6);












//********************************************* lab3 16/11 *****************************/



let str= new String ("hello world for her ");


function capitalLetter( str)
{
    
   let sptr =new String (str.split(" "));

    

    for(let i= 0  ; i<sptr.length  ;i++){

  var newCapital = sptr.charAt(0).toUpperCase() + sptr.slice(1).toLocaleLowerCase();

return newCapital


    }


    

}
console.log(capitalLetter(str));











//2 
function findlongestWord (sentence ){


 let words = sentence.split(" ");

 let longestWord ="";
 for (let i=0 ; i< words.length ;i++){
    let word = words[i];


    if (word.length>longestWord.length){
        longestWord = word;

    }
}

return longestWord;

 }


//3




function toAlpabetical (sentence){
    

    

    var chars = str.split('');

    var sortedChars = chars.sort();
    var sortedString = sortedChars.join('');
    


    return sortedString;
}
 


 




console.log(toAlpabetical("helloa"));


























 //4 

 


 function getMonth( mydate){
    
 let date = new Date (mydate);

const dateMonth =date.getMonth();

const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
return monthNames[dateMonth];
 }

 console.log(getMonth("1965,10,12"));


























 function generateRandomArray() {
    let numbers = [];
  
    while (numbers.length < 5) {
      let randomNumber = Math.floor(Math.random() * 10) + 1;
    
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
  
    return numbers;
  }
  
  
  let randomArray = generateRandomArray();
  console.log("Random array:", randomArray);






















