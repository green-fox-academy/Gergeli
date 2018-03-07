'use strict'

abstract class Animal {
  private name: string;
  age: number;
  gender: string;
  species: string;
  numberOfLegs: number;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  breed() {

  }
}

abstract class Breed extends Animal {
  breed() {
    return 'eggs.';
  }
}

class Mammal extends Animal {
  breed() {
    return 'viviparous.';
  }
}

class Bird extends Breed {}

class Reptile extends Breed {}


let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());

