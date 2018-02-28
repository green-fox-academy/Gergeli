'use strict'
/*
Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100
 */

 class Station {
   private gasAmount: number;

   constructor(gasAmount) {
    this.gasAmount = gasAmount;
   }
   refill(need, fill) {
     this.gasAmount -= need;

   }
 }

 class Car {
   private gasAmount: number;
   private capacity: number;

   constructor(gasamount: number, capacity: number) {
    this.gasAmount = gasamount;
    this.capacity = capacity;
   }

   getGasamount() {
    return this.gasAmount;
   }
   getFuelNeed() {
     let need: number = this.capacity - this.gasAmount;
     return need;
   }
   setCapaCity(){
     this.gasAmount += this.capacity - this.gasAmount;
   }
   iniGasAmount() {
     this.gasAmount = 0;
   }
   iniCapaCity() {
     this.capacity = 100;
   }
 }

let skoda = new Car(20, 100);
let station = new Station(1000);
console.log(skoda.getGasamount());
station.refill(skoda.getGasamount(), skoda.setCapaCity());
console.log(skoda.getGasamount());