

/*
showing the multiple image by clicking the buttons
 */

// image store in images array.
let images = ["images/nature.jpg","images/nature3.jpg","images/sunrise.jpg"];

// select the image.
let imageTag = document.querySelector("img");

// counting the image. assign zero index image
let count = 0;

function nextImages(){

    // first method.

  /*   count++; // increase the image

    if( count >= images.length){
        count = 0;
        imageTag.src = images[count];
    } else{
        imageTag.src = images[count];
    } */

    // Second method.

    count = ( count < images.length) ? images.length + 1 : 0;
    imageTag.src = images[count];

}

function previousImages(){

   /*  count--; // decrease the image

    if( count < 0){
        count = images.length - 1;
        imageTag.src = images[count];
    } else{
        imageTag.src = images[count];
    } */

     // Second method.

     count = ( count > 0) ? count - 1: images.length - 1;
     imageTag.src = images[count];


}