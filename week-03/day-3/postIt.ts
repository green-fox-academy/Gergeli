'use strict'

//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"

class PostIt {
  public backroundColor: string;
  public text: string;
  public textColor: string;
}

let orange = new PostIt();
  orange.backroundColor = 'orange';
  orange.text = 'Idea 1';
  orange.textColor = 'blue';

let pink = new PostIt();
  orange.backroundColor = 'pink';
  orange.text = 'Awesome';
  orange.textColor = 'black';
  
let yellow = new PostIt();
  orange.backroundColor = 'yellow';
  orange.text = 'Superb';
  orange.textColor = 'green';