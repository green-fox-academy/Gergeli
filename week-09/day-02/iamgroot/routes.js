const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if(req.query.message === undefined) {
    res.json({
      "error": "I am Groot!"
    });
  } else {
    res.json({
      "received": req.query.message,
      "translated": "I am Groot!"
    });
  }
});

//distance=100.0&time=10.0
app.get('/yondu', (req, res) => {
  if(req.query.distance === undefined || req.query.time === undefined) {
    res.send('not ok');
  } else {
    res.json({
      "distance": req.query.distance,
      "time": req.query.time,
      "speed": req.query.distance / req.query.time,
    });
  }
});

app.get('/rocket', (req, res) => {
  res.json({
    "caliber25": 0,
    "caliber30": 0,
    "caliber50": 0,
    "shipstatus": "empty",
    "ready": false
  });
});

app.get('/rocket/fill', (req, res) => {
  let ready = (req.query.amount === '12500') ? 'true' : 'false';
  let amount = (req.query.amount === undefined) ? 0 : req.query.amount;
  let status = (((req.query.amount / 12500)*100) <= 100) ? `${((req.query.amount / 12500)*100)}%` : 'overloaded';
  res.json({
      "received": req.query.caliber,
      "amount": amount,
      "shipstatus": status,
      "ready": ready,
  });
});

const table = [
  {
    name: 'rise',
    amount: 10,
    calorie: 10,   
  },
  {
    name: 'corn',
    amount: 5,
    calorie: 5,
  },
  {
    name: 'bread',
    amount: 20,
    calorie: 20,
  }
];

app.get('/drax', (req, res) => {
  res.json({
    table,
  })
});

app.post('/drax', (req, res) => {
  table.push({name: 'chips'})
  res.json({
    table,
  })
});

app.put('/drax', (req, res) => {
  table[2].calorie = 2;
  res.json({
    table,
  })
});

app.delete('/drax', (req, res) => {
  table.splice(3, 1);
  res.json({
    table,
  })
});

module.exports = app;

