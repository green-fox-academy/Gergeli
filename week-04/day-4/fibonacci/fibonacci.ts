'use strict'

export class Fibonacci {

  fibo(number: any): number {
    let a: number = 1;
    let b: number = 2;
    let c: number = a + b;
    let db: number = 3;

    if(typeof number !== 'number'){
      return 0;
    }
   
    while(c <= number) {
      a = b; b = c; c = a + b;
      db++;
    }
  return db;
  }
}
