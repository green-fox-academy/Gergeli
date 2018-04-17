'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
const p = require('../routes.js');

test('groot endpoint', (t) => {
  request(app)
  .get('/groot?message=somemessage')
  .expect(200)
  .expect('Content-Type', /json/)
  .expect({"received": "somemessage", "translated": "I am Groot!"})
  .end((err, res) => {
    t.error(err);     
    t.end();
  });
});

test('groot endpoint', (t) => {
  request(app)
  .get('/groot')
  .expect(200)
  .expect('Content-Type', /json/)
  .expect({"error": "I am Groot!"})
  .end((err, res) => {
    t.error(err);     
    t.end();
  });
});

test('/yondu', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=10.0')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({"distance": 100.0, "time": 10.0, "speed": 10.0})
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

test('/yondu_2', (t) => {
  request(app)
    .get('/yondu?distance=100.0')
    .expect('not ok')
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

test('/rocket', (t) => {
  request(app)
    .get('/rocket')
    .end((err, res) => {
      t.equal(res.body.shipstatus, 'empty');
      t.error(err);     
      t.end();
    });
});

test('/rocket/fill_1', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=5000')
    .end((err, res) => {
      t.equal(res.body.ready, 'false');
      t.equal(res.body.shipstatus, '40%');
      t.error(err);     
      t.end();
    });
});

test('/rocket/fill_2', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=12500')
    .end((err, res) => {
      t.equal(res.body.ready, 'true');
      t.error(err);     
      t.end();
    });
});

test('/rocket/fill overloaded', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=12600')
    .end((err, res) => {
      t.equal(res.body.shipstatus, 'overloaded');
      t.error(err);     
      t.end();
    });
});

test('/drax', (t) => {
  request(app)
    .get('/drax')
    .end((err, res) => {
      t.equal(res.body.table[0].name, 'rise');
      t.error(err);
      t.end();
    });
});

test('/drax_POST', (t) => {
  request(app)
    .post('/drax')
    .end((err, res) => {
      t.equal(res.body.table[3].name, 'chips');
      t.error(err);
      t.end();
    });
});

test('/drax_PUT', (t) => {
  request(app)
    .put('/drax')
    .end((err, res) => {
      t.equal(res.body.table[2].calorie, 2);
      t.error(err);
      t.end();
    });
});

test('/drax_DELETE', (t) => {
  request(app)
    .delete('/drax')
    .end((err, res) => {
      t.equal(res.body.table[3], undefined);
      t.error(err);
      t.end();
    });
});
