'use strict'

class Garden {
  plants: Plants[] = [];

  watering(water: number) {
    for (let i: number = 0; i < this.plants.length; i++) {
      if (this.plants[i].waterneed === 5) {
        this.plants[i].waterlevel += (water / this.plants.length) * 0.75;
      } else {
        this.plants[i].waterlevel += (water / this.plants.length) * 0.4;
      }
    }
  }

  addFlower(flower: Flower) {
    this.plants.push(flower);
  }
  addTree(tree: Tree) {
    this.plants.push(tree);
  }
}

class Plants {
  name: string;
  waterneed: number;
  waterlevel: number;

  needwatering() {
    if (this.waterlevel < this.waterneed) {
      return `The ${this.name} Plant needs water`;
    } else {
      return `The ${this.name} Plant doesnt needs water`;
    }
  }
}

class Flower extends Plants {
  constructor(name: string) {
    super();
    this.name = name;
    this.waterneed = 5;
    this.waterlevel = 0;
  }
}

class Tree extends Plants {
  constructor(name: string) {
    super();
    this.name = name;
    this.waterneed = 10;
    this.waterlevel = 0;
  }
}


let myGarden = new Garden();

let yellow = new Flower('yellow');
let blue = new Flower('blue');
let braun = new Tree('braun');
let grey = new Tree('grey');

myGarden.addFlower(yellow);
myGarden.addFlower(blue);
myGarden.addTree(braun);
myGarden.addTree(grey);

for (let i: number = 0; i < myGarden.plants.length; i++) {
  console.log(myGarden.plants[i].needwatering());
}
myGarden.watering(40);

for (let i: number = 0; i < myGarden.plants.length; i++) {
  console.log(myGarden.plants[i].needwatering());
}

myGarden.watering(70);

for (let i: number = 0; i < myGarden.plants.length; i++) {
  console.log(myGarden.plants[i].needwatering());
}
