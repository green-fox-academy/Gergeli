let movie = document.createElement('button');
movie.innerText = 'click to list movies';
let characters = [];
let charactersById = [];
let film = null;

document.querySelector('button').addEventListener('click', (e) => {
  let value = document.querySelector('.text').value;
  let star = new XMLHttpRequest();
  star.open('GET', 'https://swapi.co/api/people');
  star.onload = (event) =>{
    let a = JSON.parse(star.responseText);
    a.results.forEach( (e) => {
      if(e.name.indexOf(value) > -1) {
        let a = document.createElement('a');
        a.innerText = e.name;
        document.querySelector('.who').appendChild(a);
        document.querySelector('.result').appendChild(movie);
        film = e.films;
      }
      charactersById.push(e.name);
    });
  }
  star.send();
  e.preventDefault();
});


movie.addEventListener('click', (e) => {
  let star = new XMLHttpRequest();
  star.open('GET', 'https://swapi.co/api/films');
  star.onload = (event) =>{
    let a = JSON.parse(star.responseText);
    a.results.forEach( (e) => {
      for(i = 0; i < film.length; i++) {
        if(e.url === film[i]) {
          console.log(e.title);
          let p = document.createElement('p');
          p.innerText = e.title;
          document.querySelector('.where').appendChild(p);
        } else {    
        }
      }
    });
  }
  star.send();
  e.preventDefault();
});