'use strict'

export class Sum {

 getSum(arr: number[]): number {
  let sum: number = 0;

  for(let i: number = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
 }
}