const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

//----------------------------------------------------------------------------------

app.get('/doubling/:input', (req, res) => {
  const input = req.params.input;

  console.log(input);
  if(input === undefined) {
    res.status(404);
    res.json({
      error: "Please provide an input!"
    });
  } else {
    res.json({
      "received": input,
      "result": input * 2,
    });
  }
/*
  let a = {
    "received": input,
    "result": input * 2,
  };
  let e = {
    error: "Please provide an input!"
}

  res.json(a || e);
*/

});






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});