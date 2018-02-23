'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

function first(lines: number){
    
    let w: number = canvas.width / 2;
    let unit: number = w / lines;
  
        for(let i: number = 0; i < lines; i++){
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'red';
            ctx.moveTo(w, (i*unit));
            ctx.lineTo(w+(i*unit), w);
            ctx.stroke();
        }
        for(let i: number = 0; i < lines; i++){
          ctx.beginPath();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'red';
          ctx.moveTo(w, (i*unit));
          ctx.lineTo(w-(i*unit), w);
          ctx.stroke();
        }
        for(let i: number = 0; i < lines; i++){
          ctx.beginPath();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'red';
          ctx.moveTo(i*unit, w);
          ctx.lineTo(w, w+(i*unit));
          ctx.stroke();
        }
        for(let i: number = 0; i <= lines; i++){
          ctx.beginPath();
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'red';
          ctx.moveTo(w, (w*2)-(i*unit));
          ctx.lineTo(w+(i*unit), w);
          ctx.stroke();
        }
      }


first(8);

console.log('is someone there????');