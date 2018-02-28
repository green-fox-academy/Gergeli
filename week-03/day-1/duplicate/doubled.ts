'use strict'

// Create a method that decrypts duplicated-chars.txt

let fs = require('fs');

let data: string = fs.readFileSync('./duplicated-chars.txt', 'utf-8');
let lines: string[] = data.split('');

function hi(){
  let arr: string[] = [];
  for(let i: number = 0; i < lines.length; i++){
    if(i%2 === 0){
      arr.push(lines[i]);
    }
  }
  let text: string = '';
  for(let i: number = 1; i < arr.length; i++){
    text += arr[i];
  }
  
  return text;
}

fs.writeFileSync('new.txt', hi());
console.log(hi());