'use strict';

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[] = [3, 4, 5, 6, 7];

let sum: number = null;

ai.map(function(value: number, index: number) {

    sum += ai[index];

});

console.log(sum);
