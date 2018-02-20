'use strict';

// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(arr: string[]){

    for(let i: number = 1; i <= arr.length; i++){
        arr[i-1] += 'a';  
    }
    return arr;
}


console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'

