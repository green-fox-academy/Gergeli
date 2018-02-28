'use strict';

let lineCounter: number = 8;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lines: number = 4;


for(let i: number = 0; i < lines; i++){
    let star: string = '';
    for(let j: number = 1; j < (lines-i); j++){
        star = star + ' ';
    }
    for(let z: number = 1; z <= (2*i+1); z++){
        star = star + '*';
    }
    console.log(star);
}
/*
for(let q: number = 1; q <= lineCounter; q++){
    let star: string = '';

    for(let x: number = 1; x <= q; x++){
        star = star + ' ';     
    }
    for(let w: number = 1; w >= q && w < lineCounter-2; w++){
        star = star + '*';
    }
    console.log(star);
}
*/
for(let i: number = 0; i < lineCounter; i++){
    let star: string = '';
    for(let z: number = 1; z <= (2*i+1); z++){
        star = star + ' ';
    }
    for(let j: number = 1; j < (lines-(i+1)); j++){
        star = star + '**';
    }
    while(i = (lineCounter-1)){
        console.log('*');
        break;
    }
   
    console.log(star);
}

