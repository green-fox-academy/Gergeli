'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]


let dots: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let secondArray: number[][] =[[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]];

function conn(arr: number[][]){
    
    for(let i: number = 0; i < arr.length - 1; i++){
        
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = 'red';
            ctx.moveTo(arr[i][0] , arr[i][1]);
            ctx.lineTo(arr[i+1][0], arr[i+1][1]);
            ctx.stroke();
    }
    
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'red';
    ctx.moveTo(arr[arr.length - 1][0], arr[arr.length - 1][1]);
    ctx.lineTo(arr[0][0], arr[0][1]);
    ctx.stroke();

}


conn(dots);
conn(secondArray);
