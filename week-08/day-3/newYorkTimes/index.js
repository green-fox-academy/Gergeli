console.log('OK');
let articles = document.querySelector('.articles');
let btn = document.querySelector('button');
let theme = document.querySelector('.theme');

function clear(el) {
  while(el.firstChild !== null) {
    el.removeChild(el.firstChild);
  }
}

btn.addEventListener('click', (e) => {
  let sh = theme.value || 'apollo11';
  
  clear(articles);


  let apollo = new XMLHttpRequest();
  apollo.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${sh}&api-key=38b13b350fd14215bd0adfde958ade31`);
  apollo.onload = (event) => {
    let text = JSON.parse(apollo.responseText);
    console.log(text.response.docs);

    text.response.docs.forEach( (e, i) => {
      let div = document.createElement('div');
      div.setAttribute('class', 'text');
      let a = document.createElement('a');
      let p = document.createElement('p');
      let pp = document.createElement('p');
      a.setAttribute('href', e.web_url)
      a.innerText = e.headline.main;
      p.innerText = e.snippet;
      pp.innerText = e.pub_date;
      div.appendChild(a);
      div.appendChild(p);
      div.appendChild(pp);
      articles.appendChild(div);
    });
  }
  apollo.send();
  e.preventDefault();
});

