const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
  let message = req.query.message;
  if (!message) {
    res.status(500).json({
      "error": "I am Groot!"
    })
  } else {
    res.status(200).json({
      "received": message,
      "translated": "I am Groot!"
    })
  }

});

module.exports = app;