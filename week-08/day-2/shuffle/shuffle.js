const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
  }
};

const Shuffler = {
  cash: 10000,
  counter: 1,
  pick: function() {
    if(this.counter % 2 ===1) {
      Panama.cash += 1000;
      console.log('Panama got 1000');
      this.counter++;
    } else {
      Cyprus.cash += 1000;
      console.log('Cyprus got 1000');
      this.counter++;
    }
  }
};

Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000
Shuffler.pick(); // prints Panama got 1000
Shuffler.pick(); // prints Cyprus got 1000

console.log(Panama.cash); // 2000 
console.log(Cyprus.cash); // 2000 