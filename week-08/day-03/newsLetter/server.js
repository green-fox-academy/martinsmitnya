const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;

  
  console.log(username, email);
});


app.listen(3000, () => {
  console.log('server at http://localhost:3000')
});