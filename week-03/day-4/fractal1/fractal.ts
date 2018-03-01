'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function something(x: number, y: number, size: number, r: number, db: number) {
  let arany = size / r;
    
  ctx.strokeRect(x + arany, 0 + y, arany, size);
  ctx.strokeRect(0 + y, x + arany, size, arany);

  if(db < 7){
    return something(x + arany , 0, size/r, 3, db++);
     
    }
  }


something(0, 0, 450, 3, 5);



//ctx.strokeRect(x, y, h, width);
//ctx.strokeRect(x, y, width, h);