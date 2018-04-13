const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parse');

app.use('/static', express.static('static'));
app.use(bodyParser.json());

app.post('/api/endpoint', (req, res) => {
  console.log(rq.body);
  res.json({
    message: 'ok',
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api/hello', (req, res) => {
  console.log(req.query);
  const name = req.query.name || 'guest';
  res.json({
    message: `Hello ${name}!`,
  });
});

const mentors = [
  {name: 'istván', age: 30},
  {name: 'gergo', age: 21},
];

const listmentors = (req, res) => {
  res.json(mentors);
  console.log(req);
};

app.get('/api/mentors/:mentorId', (req, res) => {
  const mentor = mentors[req.params.mentorId - 1];

  if(mentor === undefined) {
    res.status(404);
    res.json({
      massage: `No mentor with id  ${mentors[req.params.mentorId]}`,
    });
  } else {
    res.json(mentors[req.params.mentorId - 1]);
  }
});

app.get('/api/mentors', listmentors);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

