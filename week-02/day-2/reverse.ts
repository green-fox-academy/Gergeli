'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';


let leg: number = reversed.length;
let newString: string = '';

for(let i: number = 1; i <= reversed.length; i++){

    newString = newString + reversed.charAt(leg-1);
    leg -= 1;

}

console.log(newString);