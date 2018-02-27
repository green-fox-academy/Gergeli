'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 580;

function angle(lines: number, step: number, height: number) {
    let s: number = step/2;
    let x: number = 0;
    let y: number = canvas.height;
  for(let j: number = 0; j < lines; j++) {  
    for(let i: number = 0; i < (lines-(j)); i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'black';
      ctx.moveTo(x += (i*step), y -= (j*height));
      ctx.lineTo(x += step, y);
      ctx.lineTo(x -= s, y -= (height));
      ctx.lineTo(x -= s, y += (height));
      ctx.stroke();
      x -= i*step;
      y = canvas.height;
    }
    x += s;
  }
}

angle(35, 20, 15);











