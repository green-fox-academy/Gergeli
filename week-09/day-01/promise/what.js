let promise = new Promise(function(fulfill, reject) {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRED'));
});

function onRejected(error) {
  console.log(error.message);
}

promise.then(console.log, onRejected);
