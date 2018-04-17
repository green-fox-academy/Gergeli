let url = 'http://api.icndb.com/jokes/random';

document.querySelector('button').addEventListener('click', (e) => {
  fetch(url)
    .then( (response) => response.json())
    .then( (json) => {
      let p = document.createElement('p');
      p.innerText = json.value.joke;
      document.querySelector('.container').appendChild(p);
    });
});
