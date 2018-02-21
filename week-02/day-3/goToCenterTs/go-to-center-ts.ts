'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawLine(x: number, y: number){

    let centerX: number = canvas.height/2;
    let centerY: number = canvas.width/2;

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'blue';
    ctx.moveTo(x , y);
    ctx.lineTo(centerY , centerX);
    ctx.stroke();
}

drawLine(80, 50);
drawLine(400, 200);
drawLine(130, 300);