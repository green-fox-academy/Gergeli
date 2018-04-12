/*
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

let signed = false;
/*
document.querySelector('.post').addEventListener('click', (e) => {
  if(signed) {
    document.querySelector('.newPost').style.display = 'flex';
  } else {
    document.querySelector('.in').setAttribute('class', 'inPlusz');
    //document.querySelector('.registration').style.display = 'flex';
  }
});
*/
/*
document.querySelector('#in').addEventListener('click', (e) => { // Sign in form submit input
  let user = document.querySelector('.felh').value;
  let password = document.querySelector('#password').value;
  let loginData = new XMLHttpRequest();
  loginData.open('GET', '/login/a/');
  loginData.onload = () => {
    let response = JSON.parse(loginData.responseText);
    console.log(response);

    response.forEach( (e) => {
      if(e.username === user && e.password == password) {
        signed = true;
        document.querySelector('.in').style.display = 'none';
        let p = document.createElement('p');
        p.innerText = 'Now you can submit a new post!';
        document.querySelector('.inPlusz').appendChild(p);
      }
    });
  }
  loginData.send();
});
*/

