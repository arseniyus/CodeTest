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

app.delete('/:id', (req, res) => {
  const movieId = parseInt(req.params.id);
  const deletedMovie = database.deleteMovie(movieId);

  if (!deletedMovie) {
    return res.status(404).json({ message: "Movie not found" });
  }

   return res.status(200).json({deletedMovie, message: "Movie successfully deleted"});
});

app.get('/:year', (req, res) => {
  const year = parseInt(req.params.year);
  console.log("Received request for movies in year:", year);

  const filteredMovies = database.filterMovie(year);
  console.log("Filtered movies:", filteredMovies);

  if (filteredMovies.length === 0) {
    return res.status(404).json({ message: "No movies found" });
  }
    return res.status(200).json({ filteredMovies })

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})