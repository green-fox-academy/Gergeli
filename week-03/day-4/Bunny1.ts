'use strict'

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnies (numberOfBunnies: number) {
  let ears: number = 2;

  if(numberOfBunnies < 1) {
    return 0;

  }else {
    numberOfBunnies -= 1;
    ears += bunnies(numberOfBunnies);
  }
  return ears;
}

console.log(bunnies(125));