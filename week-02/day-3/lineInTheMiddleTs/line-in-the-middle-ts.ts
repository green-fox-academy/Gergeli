'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

console.log('hello');

let h: number = canvas.height/2;
let w: number = canvas.width/2;

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.moveTo(w , 0);
ctx.lineTo(w , h*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#FF0000';
ctx.moveTo(0 , h);
ctx.lineTo(w * 2 , h)
ctx.stroke();