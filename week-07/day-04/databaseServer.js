'use strict'
let express = require('express');
let app = express();
let mysql = require('mysql');

//In sql console:
//CREATE DATABASE [databaseName]
//USE [databaseName]

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myDBname',
  insecureAuth: 'true'
});

conn.connect( (err) => {
  if (err) throw err; //else
  console.log('I succesfully connected');
});

//Server GET, POST, PUT, DELETE

app.get('/', (req, res) => {
  //SELECT
  conn.query('SELECT * FROM [databaseName];', (err, rows) => {
    if(err) {
      console.log(err);
      res.status(500).json({error: 'adatabase error'});
      return
    } else {
      res.json(rows);
      console.log(rows);
    }
  })
})

app.post('/', (req, res) => {
  //INSERT
  conn.query('INSERT INTO [databaseName] (name, age) VALUES (?, ?);', [myName, myAge], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'adatabase error'});
      return
    } else {
      res.send ('Inserted to database')
    }
  })
})

app.put('/:id', (req, res) => {
  //UPDATE
  conn.query('UPDATE [databaseName] SET name = (?), age = (?) WHERE id = (?);', [myName, myAge, req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'adatabase error'});
      return
    } else {
      res.send ('Updated database')
    }
  })
})

app.delete('/', (req, res) => {
  //DELETE
  conn.query('DELETE FROM [databaseName] WHERE id = (?);', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'adatabase error'});
      return
    } else {
      res.send ('Deleted from database')
    }
  })
})

//Listening on port:
app.listen(3000, () => {console.log('server ONLINE on port 3000')});