'use strict'
// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function addToN(n: number) {
 if(n <=1) {
   return 1;
 }else {
  return n + addToN(n-1);
 }
}

console.log(addToN(5));