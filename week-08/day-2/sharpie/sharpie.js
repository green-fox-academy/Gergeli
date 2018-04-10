/*
We should know about each sharpie:
color (which should be a string)
width (which will be a number)
inkAmount (another number)
When instantiating a Sharpie, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount by the width
Write a loop that consumes all the sharpie's ink.
Make sure your loop works with any inkAmount, so your code figures out when it's out of ink.
*/

class Sharpie  {

  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkamount = 100;
  }

  use() {
    this.inkamount -= this.width;
  }

  useAll() {
    while(this.inkamount > 0) {
      if(this.width > this.inkamount) {
        this.inkamount = 0;
      } else {
        this.inkamount -= this.width;
      }
    }
  }
}

let sharp = new Sharpie('Red', 5);

console.log(sharp.inkamount);
sharp.use();
console.log(sharp.inkamount);
sharp.useAll();
console.log(sharp.inkamount);
