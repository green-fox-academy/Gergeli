const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

//----------------------------------------------------------------------------------

app.get('/doubling/', (req, res) => {
  const input = req.query.input;

  if(input === undefined) {
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

  if(name === undefined) {
    res.json({
      "error": "Please provide a name!",
    });
  } else if(title === undefined) {
    res.json({
      "error": "Please provide a title!",
    });
    
  } else {
    res.json({
      welcome_message:`Oh, hi there ${name}, my dear ${title}!`,
    });

  }
});

app.get('/appenda/:appendable', (req, res) => {
  const appendable = req.params.appendable;

  if(appendable === undefined) {
    res.status(404);
  } else {
    res.json({
        "appended": `${appendable}a`,
    });
  }
});






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});