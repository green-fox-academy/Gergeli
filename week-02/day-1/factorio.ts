'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(a: number){

    let q: number = a;
    let b: number = a;

    if(a == 0){
        return 1;
    }else{
        for(let i: number = 1; i < b; i++){
            a = a * (q-i);        
        }
        return a;
    }

}


console.log(factorio(5));