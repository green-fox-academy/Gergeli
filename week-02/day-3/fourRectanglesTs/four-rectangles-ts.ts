'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let q: number = 0;

function rect(q: number){

    q = parseInt(prompt('How many squers are yu want to see in the screen?'));

    let wit: number = canvas.width;
    let hei: number = canvas.height;

    for(let i: number = 0; i < q; i++){

        function random_rgba() {
            var o = Math.round, r = Math.random, s = 255;
            return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
        }
        console.log(random_rgba());
        var color = random_rgba();
        let squer: number = Math.random()*100;

        ctx.fillStyle = color;
        ctx.fillRect((Math.random()*(wit-squer)), (Math.random()*(hei-squer)), squer, squer);
        
    }

}

rect(0);