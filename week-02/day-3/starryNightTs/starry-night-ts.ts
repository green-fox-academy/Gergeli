'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


function starDrawer(stars: number){

    for(let i: number = 1; i < stars; i++){

        function random_rgba() {
            var s: number = (Math.random()*65) + 135;
            return 'rgb(' + s + ',' + s + ',' + s + ')';
        } 
        var color = random_rgba();

        let size: number = Math.random()*6;

        ctx.fillStyle = color;
        ctx.fillRect((Math.random()*(canvas.width-size)), (Math.random()*(canvas.height-size)), size, size);
    }
}

starDrawer(109);