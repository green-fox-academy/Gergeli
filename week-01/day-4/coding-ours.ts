'use strict';

let hours: number= 6;
let weeks: number= 17;
let cHSemester: number= 5 * hours * weeks;

console.log('The average hours spend with coding in a semester is: ' + cHSemester + ' h');

let weekWorkingHours: number= 52 * weeks;
let percent: number= (cHSemester / weekWorkingHours) * 100; 

console.log('The coding hours is ' + percent + '% of the full semester')