'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

for(let j: number = 0; j < 8; j++){
    for(let i: number = 0; i < 8; i++){

        if(j % 2 == 0){
            if(i % 2 == 0){
                ctx.fillStyle ='white';
                ctx.fillRect(i * 50, j * 50, 50, 50); 
            }else if(i % 2 == 1){
                ctx.fillStyle ='black';
                ctx.fillRect(i * 50, j * 50, 50, 50);
            }
        }else if(j % 2 == 1){
            if(i % 2 == 0){
                ctx.fillStyle ='black';
                ctx.fillRect(i * 50, j * 50, 50, 50); 
            }else if(i % 2 == 1){
                ctx.fillStyle ='white';
                ctx.fillRect(i * 50, j * 50, 50, 50);
            }
        }
    }
}