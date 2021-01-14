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
  console.log(`Succesfully connected to - bookstore - Database`);
})

//Server GET, POST, PUT, DELETE

app.get('/', (req, res) => {
  //SendFile
  res.sendFile( __dirname + '/bookTitles.html');
})

app.get('/bookTitle', (req, res) => {

  //The Data
  conn.query('SELECT * FROM book_mast;', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'database error' });
      return

    } else {
      // elso elem amit küldeni akarok: //  res.json(rows[0].book_name);
      let myTitleList = [];
      for (let i = 0; i < rows.length; i++) {
        myTitleList.push(rows[i].book_name);
      }
      //I can send my Json List here
      res.json(myTitleList);

    }
  })

  
})

app.get('/bookData', (req, res) => {
  //Data 
  conn.query('SELECT * FROM book_mast LEFT JOIN category ON category.cate_id = book_mast.cate_id LEFT JOIN author ON author.aut_id = book_mast.aut_id LEFT JOIN publisher ON publisher.pub_id = book_mast.pub_id;', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'database error' });
      return
    } else {
      let allBooks = [];
      for (let i = 0; i < rows.length; i++) {
        let category = req.query.category === rows[i].cate_descrip;
        let publisher = req.query.publisher === rows[i].pub_name;
        let plt = req.query.plt > rows[i].book_price;

        if (category && publisher && plt) {
          allBooks.push(rows[i].book_name, rows[i].aut_name, rows[i].cate_descrip, rows[i].book_price);
        } else if (category && publisher) {
          allBooks.push(rows[i].book_name, rows[i].aut_name, rows[i].cate_descrip, rows[i].book_price);
        } else if (category && plt) {
          allBooks.push(rows[i].book_name, rows[i].aut_name, rows[i].cate_descrip, rows[i].book_price);
        } else if (publisher && plt) {
          allBooks.push(rows[i].book_name, rows[i].aut_name, rows[i].cate_descrip, rows[i].book_price);
          //Individual query
        } else if (category && !req.query.publisher && !req.query.plt) {
          allBooks.push(rows[i].book_name, rows[i].aut_name, rows[i].cate_descrip, rows[i].book_price);
        }else if (publisher && !req.query.category && !req.query.plt) {
          allBooks.push(rows[i].book_name, rows[i].aut_name, rows[i].cate_descrip, rows[i].book_price);
        }else if (plt && !req.query.category && !req.query.publisher) {
          allBooks.push(rows[i].book_name, rows[i].aut_name, rows[i].cate_descrip, rows[i].book_price);
        }


      }
      //This is the response Array with all the necesary books data
      res.json(allBooks);

    }
  })
})




//Listen
app.listen(3000, () => {
  console.log('Server online PORT 3000')
})