'use strict';

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let nuMList: number[] = [1, 2, 3, 8, 5, 6];

nuMList.map(function (value: number, index: number) {

   if(nuMList[index] == 8){
    
    nuMList[index] = 4;
    }

    //return value;

});

console.log(nuMList[3]);