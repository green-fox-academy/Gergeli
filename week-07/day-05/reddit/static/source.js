let sign = false;

// TRY TO POST SOMETHING

document.querySelector('.post').addEventListener('click', (e) => {
  if(sign) {
    document.querySelector('.newPost').style.display = 'flex';
  } else {
    document.querySelector('.in').style.display = 'flex';
  }
  
  e.preventDefault();
});

// TRY TO LOG IN 

document.querySelector('#bejelentkezes').addEventListener('click', (e) => {
  let username = document.querySelector('.felh').value;
  let password = document.querySelector('.jelszo').value;
  let datas = new XMLHttpRequest();
  datas.open('GET', 'http://localhost:3000/login/a');
  datas.onload = () => {
    let users = JSON.parse(datas.responseText);
    users.forEach( (e) => {
      console.log(e);
      if(e.username === username && e.password === password) {
        document.querySelector('.in').style.display = 'none';
        let p = document.createElement('p');
        p.innerText = 'Now you can make a new post!';
        document.querySelector('.second').appendChild(p);
        sign = true;
      } else {
        console.log('NO');
      }
    });
  }
  datas.send();
  e.preventDefault();
});

// CREATE A NEW ACCOUNT

document.querySelector('.account').addEventListener('click', (e) => {
  document.querySelector('.in').style.display = 'none';
  document.querySelector('.registration').style.display = 'flex';
  e.preventDefault();
});

// REGISTRATION

document.querySelector('#makeNewUser').addEventListener('click', (e) => {
  let data = new XMLHttpRequest();
  data.open('POST', 'http://localhost:3000/');
  data.setRequestHeader('Content-Type', 'application/json');
  data.onload = (event) => {
    document.querySelector('.registration').style.display = 'none';
    document.querySelector('.in').style.display = 'flex';
  }

  data.send(JSON.stringify({
    username: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    password : document.querySelector('#regPassword').value,
  }));
  
  e.preventDefault();
});

document.querySelector('#makeApost').addEventListener('click', (e) => {
  let newPost = new XMLHttpRequest();
  newPost.open('POST', 'http://localhost:3000/text/');
  newPost.setRequestHeader('Content-Type', 'application/json');
  newPost.send(JSON.stringify({
    title: document.querySelector('#title').value,
    text: document.querySelector('#szoveg').value,
    url: document.querySelector('#posturl').value,
  }));

  e.preventDefault();
});
