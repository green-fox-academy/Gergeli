'use strict'

export class Sum {

 getSum(arr: number[]): number {
  let sum: number = 0;

  for(let i: number = 0; i < arr.length; i++){
    try {
      sum += arr[i];
    } catch (error) {
      return 0;
    }
  }

  return sum;
 }
}