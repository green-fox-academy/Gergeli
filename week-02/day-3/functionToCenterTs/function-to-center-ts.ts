'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function vonal(x: number, y: number){
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red';
    ctx.moveTo(x , y);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}

function lines(x: number, y: number){

   vonal(30, 30);

    for(let i: number = 1; 30 + (20 * i) < canvas.width - 20; i++){
        vonal(30 +(20 *i), y);
    }
    for(let i: number = 1; 30 + (20 * i) < canvas.height - 20; i++){
        vonal(canvas.width-30, 30 + (20 * i));
    }
    for(let i: number = 1; 30 + (20 * i) < canvas.width - 20; i++){
        vonal(30 +(20 *i), canvas.height-30);
    }
    for(let i: number = 1; 30 + (20 * i) < canvas.height - 20; i++){
        vonal(30, y + (20 * i));
    }
}

lines(30, 30);