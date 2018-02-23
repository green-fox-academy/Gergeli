'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function something(lines: number, x: number, y: number){
    let h: number = canvas.height / lines;

    for(let i: number = 0; i <= lines; i++){

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        ctx.moveTo(x, (i * h) + y);
        ctx.lineTo((i*h) + x, lines * h);
        ctx.stroke();

    }

}

function lines(lines: number){
    let h: number = canvas.height / lines;
    let w: number = canvas.width;
    let h2: number = canvas.height;

    for(let i: number = 0; i <= lines; i++){

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'blue';
        ctx.moveTo(0 + (h * i), 0);
        ctx.lineTo(w, h * i);
        ctx.stroke();

    }

}


console.log('hali');

something(12, 0, 20);
lines(12);
