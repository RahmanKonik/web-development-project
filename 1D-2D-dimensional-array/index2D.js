

// create two dimensional array.
// display it
// try it using the function
// return it.

function twoDimensionalArray(value){

    let highAge = value[0][0]; // first array person is the high age, guess
    let highestAge = value[0][1]; // highest age is the zero column and one column value,
    //we comparing the age,highage person name changing not comparing

    for ( let i = 0; i < value.length; i++){
        if ( highestAge < value[i][1]){
            highestAge = value[i][1];
            highAge = value[i][0];
        }
    }
    document.write(highAge); // displaying the result
    // we can use the return it, print it out of function.

}

let twoDimensionalValue = [
    ["Tony", 12],
    ["Jony", 82],
    ["Pony", 32],
    ["Kony", 42],
    ["Rony", 52]
];

// call the function
twoDimensionalArray(twoDimensionalValue);