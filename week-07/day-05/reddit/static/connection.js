const mysql = require('mysql');

const conn = {
  host: '127.0.0.1',
  user: 'root',
  password: 'Piraka02',
  database: 'reddit'
};

conn.query('SELECT * FROM reddit', (err, rows) => {
  if(err !== null) {
    console.log(err);
  } else {
    
  }
});