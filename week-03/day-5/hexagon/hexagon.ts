'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function hexagon(x: number, y: number, size: number) {
  let section: number = size / 4;
  let half: number = size / 2;
  let newSize: number = size / 3;

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.moveTo(x + section, y + 0);//     1
  
  ctx.lineTo(x + size - section, y + 0); //      2
  ctx.lineTo(x + size, y + half);//  3
  ctx.lineTo(x + size - section, y + size);//    4
  ctx.lineTo(x + section, y + size);
  ctx.lineTo(x + 0, y + half);
  ctx.lineTo(x + section, y + 0);
  ctx.stroke();

  if(size < 50) {
  } else {
    hexagon(x + section, y + 0, section);
  }
}


hexagon(0, 0, 600);