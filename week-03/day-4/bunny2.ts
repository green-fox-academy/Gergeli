'use strict'

// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnies (numberOfBunnies: number) {
  let ears: number = 2;

  if(numberOfBunnies < 1) {
    return 0;

  }else if(numberOfBunnies%2 === 0) {
    numberOfBunnies -= 1;
    ears += 1;
    ears += (bunnies(numberOfBunnies));
  }else {
    numberOfBunnies -= 1;
    ears += (bunnies(numberOfBunnies));
  }
  return ears;
}

console.log(bunnies(1));
console.log(bunnies(2));
console.log(bunnies(3));
console.log(bunnies(4));
console.log(bunnies(5));
console.log(bunnies(6));
console.log(bunnies(7));