'use strict';

// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let nuMlist: number[] = [1, 2, 3, 4, 5];


function increment(a: number){

        nuMlist[a] += 1;

        return nuMlist[a];
}


console.log(increment(2));