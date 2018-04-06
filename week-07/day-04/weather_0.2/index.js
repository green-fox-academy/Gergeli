const express = require('express');
const app = express();
const PORT = 3000;
const request = require('request');

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

let citys = ['Melbourne', 'Budapest', 'London', 'Toronto', 'Portland']
let a = [];
let b = [];



for (let i = 0; i < citys.length; i++) {
  let url = `http://api.apixu.com/v1/current.json?key=6f2e05b3086f4fd2842183125180504&q=${citys[i]}`;
  request(url, (err, res, body) => {
    let data = JSON.parse(body);
    a.push([data.location.name, data.location.region, data.current.temp_c, data.current.condition.icon, data.current.condition.text]);
  });
}

//-------------------------------------------------------------------

for (let i = 0; i < citys.length; i++) {
  let url = `http://api.apixu.com/v1/forecast.json?key=6f2e05b3086f4fd2842183125180504%20&q=${citys[i]}&days=5`;
  request(url, (err, res, body) => {
    let data = JSON.parse(body);
    b.push(data);
  });
}

//-------------------------------------------------------------------

app.get('/', (req, res) => {
  res.render('home', {
    a,
  });
});

//-------------------------------------------------------------------

app.get('/place/', (req, res) => {
  let city = req.query.city;
  let current = [];
  b.forEach((e, i) => {
    if (e.location.name === city) {
      current.push(e);
    }
  });

  a.forEach((e, i) => {
    if (a[i][0].indexOf(city) > -1) {
      current.push(e);
    }
  });

  res.render('citys', {
    current,
    city,
  });
});

//-------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Server is lisen on port ${PORT}`);
});
