

document.querySelector('.submit').addEventListener('click', (e) => {
  let user = document.querySelector('.user').value;
  let loginData = new XMLHttpRequest();
  loginData.open('GET', '/login/a/');
  loginData.onload = () => {
    let response = JSON.parse(loginData.responseText);
    console.log(response);

    response.forEach( (e) => {
      if(e.username === user) {
        console.log(window.location.href);
        window.location.href = 'http://localhost:3000/';
      }
    });
  }
  loginData.send();
  //e.preventDefault();
});
