'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');

//CREATE DATABASE bookstore
//USE bookstore

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore', 
})

conn.connect((err) => {
  if (err) throw err;
  console.log (`Succesfully connected to - bookstore - Database`);
})

//Server GET, POST, PUT, DELETE

app.get ('/', (req, res) => {
  res.send('Good connection to bookstore');
})

app.get ('/bookTitles', (req, res) => {
  
  //The Data
  conn.query('SELECT * FROM book_mast;', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({error: 'database error'});
      return

    } else {
      // elso elem amit küldeni akarok: //  res.json(rows[0].book_name);
      let myTitleList = [];
      for (let i = 0; i < rows.length; i++) {
        myTitleList.push(rows[i].book_name);
        // Insted of pushing I want to append the document
      }
      //I can send my Json List here but I want to send the document finanly
      res.json(myTitleList);

    }
  })
  //SendFile
  //res.sendFile( __dirname + '/bookTitles.html');
})






//Listen
app.listen(3000, ()=> {
  console.log('Server online PORT 3000')
})