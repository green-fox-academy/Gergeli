'use strict';

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let low: string = quote.toLowerCase();

let fir: string = quote.substr(0, (low.indexOf('it')+2));
fir += 'always takes longer than';
fir += quote.substr((low.indexOf('it')+ 2), quote.length-1);

console.log(fir);
