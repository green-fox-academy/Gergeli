'use strict'

class Plant {
  name: string;
  color: string;
  waterLevel: number;
  waterNeed: boolean;

}

class Garden extends Plant{
  garden: Plant[];

  addPlant(plant: Plant) {
    this.garden.push(plant);
  }
/*
  watering(water) {
    this.garden.map(function (value, i) {
      if () {

      }
    });
  }
*/
}


class Flower extends Plant {

  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }
}

class Tree extends Plant {

  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }
}

let garden = new Garden();

let pipacs = new Flower('pipacs', 'yellow');
let tulipan = new Flower('pipacs', 'white');

garden.addPlant(pipacs);
garden.addPlant(tulipan);

console.log(garden.garden);