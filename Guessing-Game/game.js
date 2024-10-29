
// Guessing game or Number guessing game
// user input the number or guess a number 5 times.
// Showing pop message for input the number.
// Using random method
// Using the floor method for integer value
// Asking the six times for guessing the number.
// after that showing the total number of won and lost.

let numberOfwon = 0;
let numberOflost = 0;

for ( let number = 0; number <= 5; number++) {

    let guessNumber = parseInt(prompt("Enter a number between 1 to 5: "));

    let randomNumber =Math.floor(Math.random() * 6);

    if( guessNumber === randomNumber){
        console.log("You won!, random number is :"+randomNumber);
        numberOfwon++;
    } else{
        console.log("You lost!, Random number was: "+ randomNumber);
        numberOflost++;
    }
}

document.write("Total number of Won: "+numberOfwon+ "<br>");
document.write("Total number of Lost: "+numberOflost+ "<br>");

