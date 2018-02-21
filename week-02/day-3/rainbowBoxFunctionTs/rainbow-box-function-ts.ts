'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.


function rainbow(size: number, color){

    ctx.fillStyle = color;
    ctx.fillRect((canvas.width/2)-size/2, (canvas.height/2)-size/2, size, size);

}

rainbow(350, 'red');
rainbow(300, 'orange');
rainbow(250, 'yellow');
rainbow(200, 'green');
rainbow(150, 'blue');
rainbow(100, 'purple');
rainbow(50, 'deepPink');
