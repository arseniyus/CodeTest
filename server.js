const getExample = require('./controllers/exampleController.js');
const database = require('./database.js');

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.json(database.getAllMovies());
})

app.get('/:id', (req, res) => {
  res.json(database.getMovie());
})

app.post('/', (req, res) => {

  if (!req.body) {
    return res.status(400).json({ message: "Request body is missing." });
  };

  const { title, year, director, genre, rating } = req.body;
  const addResult = database.addMovie(title, year, director, genre, rating);  

  if (!addResult) {
    return res.status(500).json({message: "Failed to add movie"})
  }
  return res.status(201).json(addResult);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})