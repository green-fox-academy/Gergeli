'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function something(lines: number, x: number, y: number){
    let h: number = canvas.height / lines;

    for(let i: number = 0; i <= lines; i++){

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        ctx.moveTo(x, (i * h) + y);
        ctx.lineTo((i*h) + x, lines * h);
        ctx.stroke();

    }

}

something(12, 0, 20);
/*
//canvas.width
//canvas.height
//
let wid: number = 4;
let he: number = 4;

function lines(lines: number){
    let h: number = wid / lines;
    let w: number = canvas.width / wid;
    let h2: number = canvas.height / he;

    for(let i: number = 0; i <= lines; i++){

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'blue';
        ctx.moveTo(0 *  + (h * i), 0);
        ctx.lineTo(w, h * i);
        ctx.stroke();

    }

}


console.log('hali');

something(12, 0, 20);
lines(12);


function divide(db: number, lines: number){

let div: number = Math.sqrt(db);
let wid: number = canvas.width / div;
let hei: number = canvas.height / div;
let unit: number = wid / lines;

  for(let j: number = 0; j < div; j++){
      for(let i: number = 0; i < lines; i++){
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        ctx.moveTo((j * wid), (i * unit) + (j * wid));
        ctx.lineTo((i * unit) + (j * wid), ((j + 1) * wid));
        ctx.stroke();
      }
  }
}

divide(16, 6)
console.log(Math.sqrt(64));

function path(db: number, lines: number){
  let div: number = Math.sqrt(db);
  let wid: number = canvas.width / div;
  let hei: number = canvas.height / div;
  let unit: number = wid / lines;

  for(let j: number = 1; j <= div; j++){
    if(j % 2 === 0){
      for(let i: number = 0; i < lines; i++){
        for(let r: number = 0; r < div; r++){
          ctx.beginPath();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'red';
          ctx.moveTo((j * wid), (i * unit) + (j * wid));
          ctx.lineTo((i * unit) + (j * wid), ((j + 1) * wid));
          ctx.stroke();
        }
      }
    }
  }
}
*/