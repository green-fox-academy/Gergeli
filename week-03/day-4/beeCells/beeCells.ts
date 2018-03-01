'use strict'

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function draw(x: number, y: number, size: number, magas: number) {
  let section: number = size / 4;
  let sec: number = size / 2;
  let secti: number = (size / 4) * 3;
  let maga: number = magas/2;
  let ma: number = magas/4;

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.moveTo(x + section, y + 0);//     1
  
  ctx.lineTo(x + size - section, y + 0); //      2
  ctx.lineTo(x + size, y + maga);//  3
  ctx.lineTo(x + secti, y + magas);//    4
  ctx.lineTo(x + section, y + magas);//    5
  ctx.lineTo(x + 0, y + maga);//  6
  ctx.lineTo(x + section, y + 0);//       7
  ctx.stroke();

  if(size < 30) {
  }else {
    draw(x + (section*0.5) , y + 0, sec, maga);
    draw(x + (sec), y + (ma), sec, maga);
    draw(x + (section*0.5) , y + maga, sec, maga);
  }
}


draw(0, 0, 600, 500);
console.log('Hello is someone there?');