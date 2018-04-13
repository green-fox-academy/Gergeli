const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

//----------------------------------------------------------------------------------

app.get('/doubling/', (req, res) => {
  const input = req.query.input;

  if (input === undefined) {
    res.json({
      error: "Please provide an input!"
    });
  } else {
    res.json({
      "received": input,
      "result": input * 2,
    });
  }
});

app.get('/greeter/', (req, res) => {
  const name = req.query.name;
  const title = req.query.title;

  if (name === undefined) {
    res.json({
      "error": "Please provide a name!",
    });
  } else if (title === undefined) {
    res.json({
      "error": "Please provide a title!",
    });

  } else {
    res.json({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
    });

  }
});

app.get('/appenda/:appendable', (req, res) => {
  const appendable = req.params.appendable;

  if (appendable === undefined) {
    res.status(404);
  } else {
    res.json({
      "appended": `${appendable}a`,
    });
  }
});

app.post('/dountil/:thing', (req, res) => {
  const thing = req.params.thing;
  //console.log(thing);
  //console.log(req.body.until);
  let st = 1;
  console.log(req.body.until);
  if (req.body.until === undefined) {
    res.json({
      "error": "Please provide a number!",
    });
  } else if (thing === 'sum') {
    let sum = 0;
    while (st <= req.body.until) {
      sum += (st);
      st++;
      console.log(sum);
    }
    res.json({
      "result": sum,
    });
  } else if (thing === 'factor') {
    let fac = 1;
    while (st <= req.body.until) {
      fac *= st;
      st++
      console.log(fac);
    }
    res.json({
      "result": fac,
    });
  }
  res.end();
});


app.post('/arrays/', (req, res) => {
  const what = req.body.what;

  if (what === undefined) {
    res.json({
      "error": "Please provide what to do with the numbers!"
    });
  } else if (req.body.numbers === undefined) {
    res.json({
      "error": "Please provide what to do with the numbers!"
    });
  } else if (what === "sum") {
    let result = 0;
    for (let i = 0; i < req.body.numbers.length; i++) {
      result += req.body.numbers[i];
    }
    res.json({
      "result": result,
    });
  } else if (what === "multiply") {
    let result = 1;
    for (let i = 0; i < req.body.numbers.length; i++) {
      result *= req.body.numbers[i];
    }
    res.json({
      "result": result,
    });
  } else if (what === "double") {
    let arr = [];
    for (let i = 0; i < req.body.numbers.length; i++) {
      arr.push(req.body.numbers[i] * 2);
    }
    res.json({
      "result": arr,
    });
  }
  res.end();
});

app.post('/sith/', (req, res) => {
  let text = req.body.text.toLowerCase();
  let arr = text.split('.');
  let random = ['Arrgh', 'Uhm', 'Err'];

  //console.log(arr);
  let str = '';
  for (let j = 0; j < arr.length - 1; j++) {
    let newArr = arr[j].split(' ');
    for (let i = 0; i < newArr.length; i += 2) {
      str += newArr[i + 1] + ' ';
      if(i === newArr.length - 1) {
        str += newArr[i];
      } else {
        str += newArr[i] + ' ';
      }
    }
    str += '. ';
  }
  
  let str2 = '';
  let upper = str.split('.');
  console.log(upper);
  for (let i = 0; i < upper.length - 1; i++) {
    upper[i].charAt(0).toUpperCase();
    console.log(upper[i]);
    str2 += upper[i] + '.';
  }

  






  res.json({
    "sith_text": str2,
  });
  res.end();
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});