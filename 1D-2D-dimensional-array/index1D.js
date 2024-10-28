

// create a one dimensional array.
// user input the dimensional array value.
// pass it into a function.
// display or return it.

function dimensionalValue(array){

    for( let j = 0; j < array.length ; j++){
        console.log(array[j]);
    };

};

let array1D = [];

for( let i = 0; i < 5; i++){
    array1D[i] = parseInt(prompt("Enter "+ i +" value: "));
};

dimensionalValue(array1D);