const express = require('express');

const checkValController = require('./controllers/checkVal.js');

const app = express();
const PORT = 3030;

app.use(checkValController);

app.listen(PORT, err => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log('Server listening on port', PORT);
  }
});
