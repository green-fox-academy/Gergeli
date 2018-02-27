'use strict'

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

let f = require('fs');

let datas: string = f.readFileSync('./log.txt', 'utf-8');

function IP() {
  let arr: any[] = datas.split('  ' || '\r \n');
  let ip: any[] = [];

  for(let i: number = 2; i < arr.length; i += 3) {
    ip.push(arr[i]);
  }
  return ip;
}

function ratio() {
  let datas: string = f.readFileSync('./log.txt', 'utf-8');
  let lines: string[] = datas.split('\n');
  let post: any[] = [];
  let p: number = 0;
  let g: number = 0;

  for(let i: number = 0; i < lines.length; i++) {
    post.push(lines[i].slice(41, 45));
  }
  for(let i: number = 0; i < post.length; i++) {
    if(post[i] === 'POST') {
      p++;
    }else {
      g++;
    }
  }

  return (p + '/' + g);
}

console.log(IP());
console.log(ratio());
