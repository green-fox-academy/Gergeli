'use strict'

export class Letters {

  countletters(word: string) {
    let arr: string[] = [];

    for(let i: number = 0; i < word.length; i++){
      let lett: number = word.split(word.charAt(i)).length-1
      arr[i] = `${word.charAt(i)} ${lett}`;
    }

    let q: string = arr.filter((el, index) => arr.indexOf(el) === index ).join(', ');

    return q;
  }
}

let n = new Letters();
console.log(n.countletters('apaeta'));

//word.split("a").length-1