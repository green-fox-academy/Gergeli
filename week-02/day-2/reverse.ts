'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';


let leg: number = reversed.length;
let newString: string = '';

function rev(a){
    for(let i: number = 1; i <= reversed.length; i++){

        a = a + reversed.charAt(leg-1);
        leg -= 1;

    }
    return a;
}

console.log(rev(newString));

//console.log(newString);