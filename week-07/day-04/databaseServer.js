'use strict'
let express = require('express');
let app = express();
let mysql = require('mysql');

//In sql console:
//CREATE DATABASE [databaseName]
//USE [databaseName]
//CREAT TABLE tableName (col1 type, col2 type, ....)

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'proba',
  insecureAuth: 'true'
});

conn.connect( (err) => {
  if (err) throw err; //else
  console.log('I succesfully connected');
});

//Server GET, POST, PUT, DELETE

app.get('/', (req, res) => {
  //SELECT
  conn.query('SELECT * FROM [tableName];', (err, rows) => {
    if(err) {
      console.log(err);
      res.status(500).json({error: 'database error'});
      return
    } else {
      res.json(rows);
      console.log(rows);
    }
  })
})

app.post('/', (req, res) => {
  //INSERT
  conn.query('INSERT INTO [tableName] (name, age) VALUES (?, ?);', [myName, myAge], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'database error'});
      return
    } else {
      res.send ('Inserted to table')
    }
  })
})

app.put('/:id', (req, res) => {
  //UPDATE
  conn.query('UPDATE [tableName] SET name = (?), age = (?) WHERE id = (?);', [myName, myAge, req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'database error'});
      return
    } else {
      res.send ('Updated table')
    }
  })
})

app.delete('/', (req, res) => {
  //DELETE
  conn.query('DELETE FROM [tableName] WHERE id = (?);', [req.params.id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'database error'});
      return
    } else {
      res.send ('Deleted from table')
    }
  })
})

//Listening on port:
app.listen(3000, () => {console.log('server ONLINE on port 3000')});