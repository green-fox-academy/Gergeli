'use strict';

const canva = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canva.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.moveTo(50 , 50);
ctx.lineTo(50 , 200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'red';
ctx.moveTo(50 , 200);
ctx.lineTo(200 , 200);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'blue';
ctx.moveTo(200 , 200);
ctx.lineTo(200 , 50);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'yellow';
ctx.moveTo(200 , 50);
ctx.lineTo(50 , 50);
ctx.stroke();