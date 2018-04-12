const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const mysql = require('mysql');

let urlencodedParse = bodyParser.urlencoded({extended: false})
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(express.json());

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Piraka02',
  database: 'reddit'
});

app.get('/hello/', (req, res) => {
  res.send('Hello');
});

app.get('/', (req, res) => {
  con.query('SELECT * FROM Text', (err, rows) => {
    if(err) {
      console.log(err);
    }
    res.render('home', {
      rows,
    });
  });
});


app.get('/new/', (req, res) => {
  let theme = req.query.id;
  con.query(`SELECT * FROM Text WHERE id=${theme}`, (err, rows) => {
    if(err) {
      console.log(err);
    }
    console.log(rows);
    res.render('side', {
      rows,
    });
  });
});

app.post('/', urlencodedParse, (req, res) => {
  const sql = `INSERT INTO users (username, email, password) VALUES (${req.body.username}, ${req.body.email}, ${req.body.password})`;

  con.query(sql, (err, result) => {
    if(err) {
      console.log(err);
    }
  });


  con.query('SELECT * FROM Text', (err, rows) => {
    if(err) {
      console.log(err);
    }
    res.render('home', {
      rows,
    });
  });
});












app.listen(PORT, () => {
  console.log(`Server is lisen on port ${PORT}`);
});