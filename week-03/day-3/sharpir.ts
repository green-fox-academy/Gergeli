'use strict'

/*
Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount
*/


class Sharpie {
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