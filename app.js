const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the homepage baby.');
});

app.listen(3000, () => {
  console.log('What\'s up!');
});