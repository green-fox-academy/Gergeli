class Animal {

  constructor() {
    this.hunger = 5;
    this.thirst = 5;
  }

  eat() {
    this.hunger++;
  }

  drink() {
    this.thirst++;
  }

  Play() {
    this.hunger--;
    this.thirst--;
  }
}

class Farm {

  constructor(slots) {
    this.slots = slots;
    this.animals = [];
    
  }

  breed() {
    if (this.slots > 0) {
      
      this.animals.push(new Animal());
    }
  }

  slaughter() {
    let leastHungry = 0;
    for (let i = 1; i < this.animals.length; i++) {
      if (this.animals[i].hunger > this.animals[i -1].hunger) {
        leastHungry = i;
      }
    }
    this.animals.splice(leastHungry, 1);
  }

  progress() {
    let counter = 0;
    if(counter % 2 === 1) {
      this.animals[counter].eat();
      this.animals[counter].drink();
      this.animals[counter].Play();
    }
    this.breed();
    this.slaughter();
    if(this.animals.length > 0) {
      console.log(`We have ${this.animals.length} ships`);
    } else if(this.animals.length === 0) {
      console.log('We are bankrupt');
    } else if(this.animals.length > 0 && this.animals.length < this.slots) {
      console.log('Okay');
    } else if(this.animals.length === this.slots) {
      console.log('Full');
    }
  }

}





// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);
console.log(SheepFarm.animals.length);
console.log('---------------------');
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.slaughter();
console.log(SheepFarm.animals.length);
console.log('---------------------');
//console.log(SheepFarm.animals);
SheepFarm.progress();
//const button = document.querySelector('button');

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  -  The farm has 20 living animals, we are full