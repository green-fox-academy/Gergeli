const btn = document.querySelector('button');
const tx = document.querySelector('.text');
const div = document.querySelector('.images');
let keyword = 'things';
let limit = 16;
let a;


btn.addEventListener('click', (e) => {
  keyword = tx.value || 'nothing';
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=Xe6QfCyx7AOIU9zwZMEZin1zEKQ7T29x&q=${keyword}&limit=25&offset=0&rating=G&lang=en`);
  xhr.onload = () => {
    a = JSON.parse(xhr.responseText);
    for(i = 0; i < limit; i++) {
      let img = document.createElement('img');
      img.setAttribute('src', a.data[i].images.original_still.url);
      div.appendChild(img);

      img.addEventListener('click', () => {
        img.setAttribute('src', a.data[i].images.original.url)
      });
    }
  }
  xhr.send();
  e.preventDefault();
});

//img.setAttribute('src', a.data[i].images.original.url);

