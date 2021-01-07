let express = require('express');
let ejs = require('ejs');
let app = express();
app.set('view engine', 'ejs');

//Text
app.get ('/URL', (req, res) => {
  res.send('Any text here');
})

//File
app.get ('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//Template rendering
app.get ('/shoppingPage', (req, res) => {
  res.render('myEjsFileName', {templateName: 'data');
});