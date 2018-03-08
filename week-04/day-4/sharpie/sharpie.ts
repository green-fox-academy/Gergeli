'use strict'

export class Sharpie {
  private color: string;
  private width: number;
  private inkAmount: number = 100;

  constructor(color: string, width: number) {
    color = this.color;
    width = this.width;
  }

  use(increase: number) {
    this.inkAmount -= increase;
  }
  getInkamount() {
    return this.inkAmount;
  }
}

let sharp = new Sharpie('blue', 10.9);
sharp.use(9);
console.log(sharp.getInkamount());