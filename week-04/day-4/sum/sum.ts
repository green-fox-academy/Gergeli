'use strict'

export class Sum {

 getSum(arr: any[]): number {
  let sum: number = 0;

  for(let i: number = 0; i < arr.length; i++){
    try {
      if (typeof sum[i] === 'string') {
        return 0;
      } 
      sum += arr[i];
    } catch (error) {
      return 0;
    }
  }

  return sum;
 }
}
