'use strict';

// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

let firstList: number[] = [1, 2, 3];
let secondList: number[] = [4, 5];


function longest() {

    let l1: number = firstList.length;
    let l2: number = secondList.length;

    if(l1 > l2){
        console.log('The first list have more elements!');
    }else if(l1 < l2){
        console.log('The second list have more elements!');
    }else{
        console.log('The number of the elements are equal!');
    }

}

longest();