'use strict'
import {Animal} from './zoo';

interface Flyable {
  land();
  fly();
}

abstract class Vehicle {
  numberOfDoors: number;
  horsePower: number;
  color: string;
}

class Helicopter extends Vehicle implements Flyable {
  land() {}
  fly() {}
}

class Bird extends Animal implements Flyable{
  land() {}
  fly() {}
}