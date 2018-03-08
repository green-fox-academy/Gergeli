'use strict'

class Aircraft {
  type : string;
  maxAmmo: number = 8;
  baseDamage: number = 30;
  ammostore: number = 0;
  }




class F16 extends Aircraft {

  constructor() {
    super();
    this.ammostore = 0;
    this.baseDamage = 30;
    this.maxAmmo = 8;
  }

  fight() {
    let damage: number = this.ammostore * this.baseDamage;
    this.ammostore = 0;
    return damage;
  }

  refill(ammo: number) {
    this.ammostore += this.maxAmmo;
    return ammo - this.maxAmmo;
  }

  get type() {
    return 'F16';
  }

  get status() {
    return `Type F16, Ammo: ${this.ammostore}, Base Damage: 30, All Damage: ${this.fight}`;
  }
}





class F35 extends Aircraft {
  
  constructor() {
    super();
    this.ammostore = 0;
    this.baseDamage = 50;
    this.maxAmmo = 12;
  }

  fight() {
    let damage: number = this.ammostore * this.baseDamage;
    this.ammostore = 0;
    return damage;
  }

  refill(ammo: number) {
    this.ammostore += this.maxAmmo;
    return ammo - this.maxAmmo;
  }

  get type() {
    return 'F35';
  }

  get status() {
    return `Type F35, Ammo: ${this.ammostore}, Base Damage: 50, All Damage: ${this.fight}`;
  }
}



class Carrier {
  aircrafts: Aircraft[];
  ammo: number;
  helthPoint: number;

  constructor(ammo: number, heltPoint) {
    this.ammo = ammo;
    this.helthPoint = heltPoint;
  }

}
  
