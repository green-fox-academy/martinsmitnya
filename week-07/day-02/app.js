'use strict';
const express = require('express');
const app = express();
const path = require ('path');
app.use(express.static('assets'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


//doubling point
app.get('/doubling', (req, res) => {
  let input = Number(req.query.input);
  let answer = '';
  if (!input){
    answer = {
      error: "Please provide an input!"
    }
    
  } else {
    answer = {
      received: input, 
      result: input*2,
    };
  }
  res.json(answer);
});

//Greeter
app.get('/greeter', (req, res) => {
  let input = {name: req.query.name, title: req.query.title}
let answer = '';

if (!input.name && !input.title) {
  answer = {
    "error": "Please provide a name and a title!"
  }
  res.status(400).json(answer);
} else if (!input.name) {
  answer = {
    "error": "Please provide a name!"
  }
  res.status(400).json(answer);
} else if (!input.title) {
  answer = {
    "error": "Please provide a title!"
  }
  res.status(400).json(answer);
} else {
  answer = {
    "welcome_message": `Oh, hi there ${input.name}, my dear ${input.title}!`
  }
  res.json(answer);
}
});




let PORT = 3000; 
app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});