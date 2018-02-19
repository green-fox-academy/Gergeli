'use strict';

// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(a: number){

    let q: number = a;
    let b: number = a;

    for(let i: number = 1;i <= b; i++){
        a = a + (q-i);
    }

    return a;
}
console.log(sum(5));