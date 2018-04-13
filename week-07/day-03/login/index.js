const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './login.html'));
});

app.get('/datas/', (req, res) => {

});


app.post('/datas/', (req, res) => {

  res.json({
    "username": "Gergeli",
    //"password": pass 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
