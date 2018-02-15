'use strict';

let a: number = 123;
let b: number = 526;
let c: number = a;

console.log('Befor the switch the a variable is ' + a)
console.log('Befor the switch the b variable is ' + b)

a = b;
b = c;

console.log('After the switch the a variable is ' + a)
console.log('After the switch the b variable is ' + b)