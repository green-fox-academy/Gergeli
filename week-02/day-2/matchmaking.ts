'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];


function makingMatche(girl: string[], boy: string[]){

    let mix: string[] = [''];

    if(girl.length > boy.length){

        for(let i: number = 1; i < girl.length; i++){
            mix[i-1] = (girl[i-1] + ' ' + boy[i-1]); 
        }
        return mix;

    }else if(girl.length < boy.length){

        for(let i: number = 1; i < boy.length; i++){
            mix[i-1] = (girl[i-1] + ' ' + boy[i-1]); 
        }

       return mix;
    }else if(girl.length = boy.length){

        for(let i: number = 1; i < girl.length; i++){
            mix[i-1] = (girl[i-1] + ' ' + boy[i-1]); 
        }
        return mix;
    }
    //return mix;
}



console.log(makingMatche(girls, boys));

