let signed = false;

document.querySelector('.regButton').addEventListener('click', (e) => {
  console.log('submit');
  let data = 
  {
    user: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    password : document.querySelector('#password').value,
  };

  let apollo = new XMLHttpRequest();
  apollo.open('POST', `http://localhost:3000/`);
  apollo.setRequestHeader('Content-Type', 'application/json');
  apollo.onload = (event) => {}
  
  apollo.send(JSON.stringify({
    username: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    password : document.querySelector('#password').value,
  }));






  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#password').value = '';

  e.preventDefault();
});



