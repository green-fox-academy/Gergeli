'use strict'

// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.


let fs = require('fs');

function ticTacResult(fileName: string) {
  let s: string = fs.readFileSync(fileName, 'utf-8');
  let arr: String[] = s.split('');

  for(let i: number = 0; i < arr.length; i+=2) {
    if(arr[i] === arr[i+1] && arr[i] === arr[i+5]) {
      console.log(arr[i] + 'gamer won the game!');
    }else if(arr[i] === arr[i+5] && arr[i] === arr[i+10]) {
      console.log(arr[i] + 'gamer won the game!');
    }else if(arr[0] === arr[6] && arr[0] === arr[12]) {
      console.log(arr[0] + 'gamer won the game!');
    }else if(arr[2] === arr[6] && arr[2] === arr[10]) {
      console.log(arr[2] + 'gamer won the game!');
    }else {
      console.log('draw');
    }
  }
  console.log(arr);
}


console.log(ticTacResult('./win-o.txt'));
// should print O
console.log(ticTacResult('./win-x.txt'));
// should print X
console.log(ticTacResult('./draw.txt'));
// should print draw

