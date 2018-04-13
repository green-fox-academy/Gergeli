let submit = document.getElementById('login');
console.log(submit);
let user = document.getElementById('username').innerText;
let users = [["Gergeli", '12345'], ["Te", "12345"]];

submit.addEventListener('click', (e) => {
  let user = document.getElementById('username').value;
  let pass = document.getElementById('password').value;
  e.preventDefault();
  let yes = false;

  users.forEach( (e, i) => {
    if(users[i][0] === user) {
      yes = true;
    }
  });

  if(yes) {
    document.querySelector('p').innerText = 'Hello';
  } else {
    document.querySelector('p').innerText = 'NO';
  }

});