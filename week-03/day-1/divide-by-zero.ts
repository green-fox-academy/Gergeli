'use strict'

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(a: number) {

  if(a === 0){
    console.log('Can\'t divide with 0!');
  }else{
    return 10 / a;
  }
}

divide(0);

