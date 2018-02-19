'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let list: any[] = [];
let leng: number = 10;
let l: number = leng;

for(let i: number = 0; i < leng; i++){
    list[i] = [];

    for(let z: number = 0; z < leng; z++){
        list[i] [z] = 0;
    }
    for(let j: number = 0; j < leng; j++){
        list[i][l-1] = 1;
    }
    l -= 1;
}

console.log(list);