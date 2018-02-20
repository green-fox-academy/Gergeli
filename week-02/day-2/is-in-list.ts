'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let search: number[] = [4,8,12,16];

function checkNums(wher: number[], what: number[]){

    let qvest: boolean = true;
    let ell: number[] = [];

    for(let l: number = 0; l < what.length; l++){
        ell[l] = 0;
    }


   for(let i: number = 0; i < what.length; i++){
       for(let j: number = 0; j < wher.length; j++){
           if(wher[j] == what[i]){
               ell[i] = 1;
           }
       }
   }
   for(let r: number = 0; r < what.length; r++){
    if(ell[r] == 0){
        qvest = false;
    }
   }  
   return qvest;
}


console.log(checkNums(listOfNumbers, search));

