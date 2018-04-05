const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: "Hello word!",
  });
});




app.listen(PORT, () => {
  console.log(`The server is lisen on port ${PORT}`);
});