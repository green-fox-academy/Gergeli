'use strict'

export class Anagram {

  anagram(first: string, second: string): boolean {
    let test: number[] = [];

    if(first.length !== second.length) {
      return false;
    }

    for(let i: number = 0; i < first.length; i++){
      test[i] = 0;
    }

    for(let i: number = 0; i < first.length; i++) {
      for(let j: number = 0; j < second.length; j++) {
        if(first.charAt(i) === second.charAt(j)) {
          test[i] = 1;
        }
      }
    }

    for(let i: number = 0; i < test.length; i++) {
      if(test[i] === 0){
        return false;
      } else {
        return true;
      }
    }
  }

}