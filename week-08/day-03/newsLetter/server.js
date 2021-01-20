const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'password', 
  database: 'proba',
  insecureAuth: 'true',
});

conn.connect((err) => {
  if (err) throw err;
  console.log('SQL 200');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;

  conn.query('INSERT INTO newsletterformtable (username, email) VALUES (?, ?);', [username, email], (err, rows) => {
    if (err) {
      res.status(500).json({error: 'database error'});
      return
    } else {
      console.log('Inserted!');
    }
  });
  
  console.log(username, email);
});


app.listen(3000, () => {
  console.log('server at http://localhost:3000')
});