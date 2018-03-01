'use strict'

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

let srt: string = 'abaxialabaxi';

function xToY(sentence: string) {
  if (sentence.indexOf('x') === -1) {
    return sentence;
  }
  else {
    sentence = sentence.replace('x', 'y');
    return xToY(sentence); 
  }
}


console.log(xToY(srt));