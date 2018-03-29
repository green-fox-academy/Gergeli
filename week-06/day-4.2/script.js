console.log('hello');
/*
let pictures = ['images/renault.jpg', 'images/haas.jpg', 'images/red.jpg', 'images/ferrari.jpg', 'images/mercedes.jpg',
 'images/torro.jpg', 'images/williams.jpg', 'images/meclaren.jpg', 'images/force.jpg'];
*/
let pictures = ['slide/1.png', 'slide/2.png', 'slide/3.jpg', 'slide/wanderer.png', 'slide/4.png', 'slide/5.png', 'slide/6.png', 'slide/7.png'];
/*
let miniGalery = document.querySelectorAll('.mini');

console.log(miniGalery);

miniGalery.forEach((v, i) => {
  let img = document.createElement('img');
  img.setAttribute('src', pictures[i])
  img.style.height = '90%';

  miniGalery[i].appendChild(img);
});

document.addEventListener('mouseover', () => {
  let a = document.querySelectorAll('img');
  a[4].style.width = '100%';
});

function mso() {
  let p = document.querySelectorAll('.mini');
  p[1].setAttribute('class', 'mini2');
}

function normal() {
  let p = document.querySelectorAll('.mini');
  p[1].setAttribute('class', 'mini');
}
*/

let counter = 0;

let mainPicture = document.querySelector('img');
mainPicture.setAttribute('src', pictures[counter]);
mainPicture.style.height = '400px';

let miniS = document.querySelectorAll('.mini img');

miniS.forEach((v, i) => {
  miniS[i].setAttribute('src', pictures[i + 1]);
  miniS[i].style.height = '60px';
});

let left = document.getElementById('left');

function next() {
  counter++;
  if(counter === 8) {
    counter = 0;
  }
  mainPicture.setAttribute('src', pictures[counter]);
  console.log(counter);
}

function back() {
  counter--;
  if(counter < 0) {
    counter = pictures.length -1;
  }
  mainPicture.setAttribute('src', pictures[counter]);
}

console.log(pictures.length);

let minute = 4;
let second = 0;
let alert = ['#b5b9bf', 'rgb(198, 63, 63)'];
let col = 0;
document.querySelector('p').innerText = `${minute} : ${second}`;

function timer() {
  if(minute >= 0 && second >= 0) {
    second--;
    if(second < 0) {
      second = 59;
      minute--;
    }

    document.querySelector('p').innerText = `${minute} : ${second}`;
  }
}

setInterval(timer, 1000);

function villog() {
  if(minute === 0 && second < 30) {
    document.querySelector('p').style.color = alert[col];
    col++;
    if(col === 2) {
      col = 0;
    }
  }
}

setInterval(villog, 200);

let a = 0;

document.addEventListener('keyup', (e) => {
  if(e.keyCode === 37) {
    back();
  } else if(e.keyCode === 39) {
    next();
  }
});
