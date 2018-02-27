'use strict'

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let file = require('fs');

function copy(from: String, to: String){
  try {
    let myOrigi = file.readFileSync(from, 'utf-8');
    let myCopy = file.writeFileSync(to, myOrigi);
    return true;
  } catch (error) {
    return false;
  }
}

console.log(copy('./firstFile.txt', './newFile.txt'));