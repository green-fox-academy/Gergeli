'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

    let lineCount: number = 4;
    let n: number = 4;


    let line: number = 4;
    
    
    for(let i: number = 0; i < line; i++){
        let star: string = '';
        for(let j: number = 1; j < (line-i); j++){
            star = star + ' ';
        }
        for(let z: number = 1; z <= (2*i+1); z++){
            star = star + '*';
        }
        console.log(star);
    }