'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

for(let i: number = 0; i < 20; i++){
    let position: number = i *15;

    ctx.fillStyle = 'purple';
    ctx.fillRect(position, position, 15, 15);

}