'use strict';

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

//Első módszer!

let todoText: string = ' - Buy milk\n';

todoText = 'My todo:\n' + todoText + ' - Download games\n' + '   -Diablo';

console.log(todoText);


//Második módszer!

let todo: string = ' - Buy milk\n';
let beginn: string = 'My todo:\n' ;
let end: string = ' - Download games\n' + '   -Diablo';

beginn = beginn.concat(todo, end);

console.log(beginn);
