const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
/*
app.get('/', (req, res) => {
  res.render('home');
});
*/
app.get('/', (req, res) => {
  let user = req.query.name;
  if(user === undefined) {
    user = 'guest';
  }
  res.render('home', {
    name: user,
  });
});





app.listen(PORT, () => {
  console.log('ok');
});