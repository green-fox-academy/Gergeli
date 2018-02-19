'use strict';

// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printer(a: string, b?: string){

    if(b == undefined){
        console.log(a);
    }else if(b != 'undefined'){
        console.log(a + b);
    }

}

printer('Hello');