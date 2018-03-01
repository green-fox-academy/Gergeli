'use strict'

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function squared(base: number, n: number) {
  if(n < 1){
    return 1;
  }else {
    base *= squared(base, n-1);
    return base;
  }
}

console.log(squared(3, 2));