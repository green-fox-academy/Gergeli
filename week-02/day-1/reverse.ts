'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numlist: number[] = [3, 4, 5, 6, 7];
let la: number = numlist.length;

let reverse: number[] = [];


for(let i: number = 0; i < la; i++){

reverse[i] = numlist.pop();
}

console.log(reverse);
