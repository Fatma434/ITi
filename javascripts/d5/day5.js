const myCollection = document.getElementsByTagName("img");


console.log(myCollection);


let allImage = document.querySelectorAll('img');

console.log(allImage);



let allOptions = document.getElementsByTagName("option");


console.log(allOptions);


allOptions[0];


let tdTable = document.getElementsByClassName('bpink');


console.log(tdTable);


//tdTable[1].querySelectorAll("td");


let allElement = document.getElementsByClassName("fontBlue bGrey");


console.log("allElement");





// function createElement(trackId, parentElement) {

//     ;
//     let coursesList = document.createElement("ul");
//     coursesList.id = trackId;


//     parentElement.appendChild(coursesList);

//     console.log("step1");

// }



// let parent_Element = document.getElementById("parentElementId")

// createElement(1, parent_Element);










// function addCourse(courseName, listElement) {

//     var course_Item = document.createElement("li");


//     course_Item.textContent = courseName;



//     listElement.appendChild(course_Item);


//     console.log("step2");


// }



// // var trackListElement = document.getElementById("trackListId");


// addCourse("Course A", "li");





// console.log(parentElement);






let imageUrls = document.getElementsByClassName("fake");
console.log(imageUrls);


const manyImage = [
    "image/2.jpg", "image/3.jpg", "image/4.jpg", "image/5.jpg"
];

console.log(manyImage);



let currentIndex = 0;




var img = document.getElementById("imageId");

function
changeCurrentImage() {



    // if (currentIndex > manyImage.length) {
    //     currentIndex = 0;
    // }


    // img.src = manyImage[currentIndex++];


    document.getElementById("imageId").src = manyImage[currentIndex];


    currentIndex = (currentIndex + 1) % manyImage.length;


}

setInterval(changeCurrentImage, 1000);