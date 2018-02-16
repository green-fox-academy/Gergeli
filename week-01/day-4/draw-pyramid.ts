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


    for (var i = 0; i < n; i++) {
      var str = '';
      for (var j = 1; j < n-i; j++) {
        str = str + ' ';
      }
      for (var k = 1; k <= (2*i+1); k++) {
        str = str + '*';
      }
      console.log(str);
    }