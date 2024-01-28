let image_var = document.getElementById("img1");


let id;

let gameArea = document.querySelector('.shootArea');


let top_position = Math.random() * (window.innerHeight - image_var.height);
image_var.style.top = top_position + 'px';
console.log(image_var);
const moveRight = (imageObject, left) => {
    id = setInterval(() => {
            left += 20;

            if (left < (window.innerWidth + imageObject.width))
                imageObject.style.left = left + "px";
            else {
                clearInterval(id);



                imageObject.style.visibility = "hidden";
                console.log("hidden");

            }
        },
        100);
}
document.addEventListener('click', function() {



    //console.log("hidde");



    //  image_var.style.visibility = "hidden";



    clearInterval(id);

    

    let hidden = setInterval(() => {

       
        image_var.src = "images/hidde.png ";
        //  image_var.classList.add()
        image_var.style.width = "90px";
        image_var.style.height = "70px";

        image_var.style.marginTop = "280px";
        // image_var.style.paddingTop = "300px";


    }, 100);
}


);
document.addEventListener('mousemove', function(e) {
   
    
    let x = e.clientX;
    let y = e.clientY;
    gameArea.style.left = `${x}px`;
    gameArea.style.top = `${y}px`;
   
});



// function handleClick(event) {
//     let sniperScope = document.querySelector('.shootArea');
//     let clickedX = event.clientX;
//     let clickedY = event.clientY;
//     gameArea.style.left = `${clickedX}px`;
//     gameArea.style.top = `${clickedY}px`;



// }

// document.addEventListener('click', handleClick);