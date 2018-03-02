'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function circles(x: number, y: number, size: number) {
  let half: number = size / 2;
  let Q: number = half * 0.25;

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.arc(x + half, y + half, half, 0, 2 * Math.PI);
  ctx.stroke();
 
  if (size < 40) {
  } else {
    circles(x + (half / 2), y + 0, half);
    circles(x + (half * 0.32) - Q, y + half - Q, half);
    circles(x + half - (half * 0.070), y + half - Q, half);
  }

}

circles(0, 0, 600);