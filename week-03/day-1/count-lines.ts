'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
let fs = require('fs');

function lineCounter(text: string) {
let file = fs.readFileSync(text, 'utf-8');
let lines: string[] = file.split('\n');

return lines.length;
}

try {
  console.log(lineCounter('my-file.txt'));
} catch (error) {
  console.log('0');
}