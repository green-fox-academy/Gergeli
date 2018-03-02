'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function triangle(x: number, y: number, width: number, height: number) {
  let wiHalf: number = width / 2;
  let heiHalh: number = height / 2;
  let wiQ: number = width / 4;

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.moveTo(x + 0 , y + 0);//     1
  
  ctx.lineTo(x + width, y + 0); //      2
  ctx.lineTo(x + wiHalf, y + height);//              3
  ctx.lineTo(x + 0, y + 0);//            4
  ctx.lineTo(x + wiHalf, y + 0);
  ctx.lineTo(x + width - wiQ, y + heiHalh);
  ctx.lineTo(x + wiQ, y + heiHalh);
  ctx.lineTo(x + wiHalf, y + 0);
  ctx.stroke();

  if(width < 20) {
  }else {
    triangle(x + 0, y + 0, wiHalf, heiHalh);
    triangle(x + wiHalf, y + 0, wiHalf, heiHalh);
    triangle(x + wiQ, y + heiHalh, wiHalf, heiHalh);
  }
}

triangle(0, 0, 600, 500);