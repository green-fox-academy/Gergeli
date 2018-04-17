require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
  // Your solution here
    setTimeout(() => fulfill(), 300);
});

// Your solution here
promise.then((response) => {console.log('FULFILLED!')});