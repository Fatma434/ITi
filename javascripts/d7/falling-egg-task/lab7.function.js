let imageObject = document.getElementById('ph1')
let top_position = 0;


// let moving_speed = 10;

let basketObj = document.getElementById("ph2");
console.log(basketObj);

let left_position = Math.random() * (window.innerWidth - imageObject.width);
imageObject.style.left = left_position + 'px';

function moveDown() {
    let id = setInterval(function() {
        if (top_position < window.innerHeight - imageObject.height) {
            top_position += 30;
            imageObject.style.top = top_position + 'px';
        } else {
            clearInterval(id);
            setInterval(() => {
                imageObject.src = "images/Uovo_sorridente.png";
            }, 200);
            console.log(window.innerHeight);

        }

        disparedEgg(imageObject, basketObj);


    }, 300)
}
moveDown();








left = 10;

let leftposition = Math.random() * (window.innerWidth - basketObj.width);









let postion = 0;
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        postion = Math.max(postion - 10, 0);
        // left -= moving_speed;
        // if (left < window.innerWidth - basketObj.width) {
        //     left -= 10;
        //     basketObj.style.left = left + 'px';
        // }
    } else if (event.key === 'ArrowRight') {




        postion = Math.min(postion + 10, window.innerWidth - basketObj.width);

        // left += moving_speed;

        // console.log("here");
        // //   moveRight(basketObj, 0);
        // if (left < window.innerWidth - basketObj.width) {
        //     left += 10;
        //     basketObj.style.left = left + 'px';

    }
    basketObj.style.left = postion + 'px';
    //}
});





disparedEgg = function(imageObject, basketObj) {

    const imageCoordinate = imageObject.getBoundingClientRect();
    const basketCoordinate = basketObj.getBoundingClientRect();
    let horizontional = (imageCoordinate.right >= basketCoordinate.left) && (imageCoordinate.left <= basketCoordinate.right)

    console.log(horizontional);

    if (((window.innerHeight - imageCoordinate.bottom) <= basketCoordinate.top) && horizontional) {
        console.log("delete");
        imageObject.style.visibility = "hidden";

    }


}





const imageCoordinate = imageObject.getBoundingClientRect();


const basketCoordinate = basketObj.getBoundingClientRect();

console.log(imageCoordinate, basketCoordinate);



//window.offsetHeight










///bird moving /