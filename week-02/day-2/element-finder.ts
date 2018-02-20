'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(arr: number[], element: number){

        if(arr.indexOf(element) == -1){
            return 'Noooooo';
        }else{
            return 'Hoorray';
        }
       
}


console.log(containsSeven(numbers, 7));

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

function otherSolution(arr: number[], element: number){

    let output: string = 'Noooooo';

    arr.forEach(function(item){

        if(item == element){
            output = 'Hoorray';
        }
        return output;

    });
    return output;

    }

console.log(otherSolution(numbers, 7));