'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function something(x: number, y: number, size: number, r: number, db: number) {
  let arany = size / r;

  ctx.strokeRect(x + arany, 0 + y, arany, size);
  ctx.strokeRect(0 + y, x + arany, size, arany);

  if (db < 7) {
    something(x + arany, 0, arany, 3, db++);
    //something(x + arany , 0, size/r, 3, db++);  

  }
  return arany;
}

//something(0, 0, 450, 3, 5);

function secondTry(x: number, y: number, size: number, r: number) {
  let arany = size / r;

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.moveTo(x + arany, 0 + y);
  ctx.lineTo(x + arany, size + y);
  ctx.stroke();

  ctx.moveTo(x + (size - arany), 0 + y);
  ctx.lineTo(x + (size - arany), size + y);
  ctx.stroke();

  ctx.moveTo(x + 0, y + arany);
  ctx.lineTo(x + size, y + arany);
  ctx.stroke();

  ctx.moveTo(x + 0, y + (size - arany));
  ctx.lineTo(x + size, (size - arany) + y);
  ctx.stroke();

  if (size <= 30) {
  } else {
    secondTry(x + arany, 0 + y, arany, r);
    secondTry(x + 0, arany + y, arany, r);
    secondTry(size - arany + x, arany + y, arany, r);
    secondTry(x + arany, size - arany + y, arany, r);
  }
}

secondTry(0, 0, 500, 3, 1);
