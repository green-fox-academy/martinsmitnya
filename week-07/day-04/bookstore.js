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
  console.log (`Succesfully connected to bookstore`);
})

//Server GET, POST, PUT, DELETE

