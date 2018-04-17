let first = new Promise(fulfill => 'Secret');

let second = first.then(function (result) {
  return reselt;
});

console.log(second);
