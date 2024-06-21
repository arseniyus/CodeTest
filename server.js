const getExample = require('./controllers/exampleController.js');
const database = require('./database.js');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json(database.getAllMovies());
})

app.get('/:id', (req, res) => {
  res.json(database.getMovie());
})

app.post('/', (req, res) => {
  res.json({ message: 'This is a POST request' });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})