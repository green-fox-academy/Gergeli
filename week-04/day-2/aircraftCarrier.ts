'use strict'

abstract class Aircraft {
  protected maxAmmo: number;
  protected baseDamage: number;
  //ammoStore: number;
  protected munitio: number = 12;
  protected type: string;

  fight() {
    let damage: number = this.munitio * this.baseDamage;
    this.munitio = 0;
    return damage;
  }
  set refill(fillAmmo: number) {
    this.munitio = 8;
   // return fillAmmo -= this.maxAmmo;
  }
  get Type() {
    return this.type;
  }

  addAmmo() {
    this.munitio = this.maxAmmo;
  }

  getStatus() {
    return `Type ${this.type}, Ammo: ${this.munitio}, Base Damage: ${this.baseDamage}, All Damage: ${this.maxAmmo * this.baseDamage}`;
  }
  isPriority() {
    if (this.type === 'F35') {
      return true;
    } else {
      return false;
    }
  }
}

class F16_Aircraft extends Aircraft {
  maxAmmo = 8;
  baseDamage = 30;
  type = 'F16';
  munitio = 8;
}

class F35_Aircraft extends Aircraft {
  maxAmmo = 12;
  baseDamage = 50;
  type = 'F35';
  //ammo: number = 12;
}

class Carrier {
  store: Aircraft[] = [];
  ammoStore: number;
  helth: number;

  constructor(ammoStore: number, helth: number) {
    this.ammoStore = ammoStore;
    this.helth = helth;
  }

  add(aircraft: Aircraft) {
    this.store.push(aircraft);
  }
  fill() {
    this.store.forEach((v, i) => {
      this.store[i].refill;
    });
  }
  fullDamage() {
    let damage: number = 0;
    this.store.forEach((v, i) => {
      damage += this.store[i].fight();
    });
    return damage;
  }
  fight(carrier: Carrier) {
    carrier.helth - this.fullDamage();
  }
  carrierStatus() {
    let aircrafts: string = '';
    for(let i: number = 0; i < this.store.length; i++) {
     aircrafts += this.store[i].getStatus() + '\n';
    }
    return aircrafts;
  }
  getStatus() {
    return `HP: ${this.helth}, Aircraft count: ${this.store.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${this.fullDamage()}
    Aircrafts:
    ${this.carrierStatus()}`;
    
  }
}
let aircraft1 = new F35_Aircraft();
aircraft1.addAmmo();
let aircraft2 = new F35_Aircraft();
let aircraft3 = new F35_Aircraft();
let aircraft4 = new F16_Aircraft();
let aircraft5 = new F16_Aircraft();

let HMSMary = new Carrier(2300, 5000);
HMSMary.add(aircraft1);
HMSMary.add(aircraft2);
HMSMary.add(aircraft3);
HMSMary.add(aircraft4);
HMSMary.add(aircraft5);
HMSMary.fill();

console.log(HMSMary.getStatus());

let USSLincoln = new Carrier(2300, 5000);
HMSMary.fight(USSLincoln);
console.log(USSLincoln.helth);
console.log(HMSMary.fullDamage());
