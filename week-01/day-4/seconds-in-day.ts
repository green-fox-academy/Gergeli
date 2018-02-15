'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let fullSeconds: number = 60 * 60 * 24;
let passedSeconds: number = (currentHours * 60) + (currentMinutes * 60) + currentSeconds;

let secondsLeft: number = fullSeconds - passedSeconds;

console.log(`${secondsLeft}` + ' second remaind from this day');