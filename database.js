const fs = require('fs');
const path = require('path');

class Database {
    constructor() {
        if (Database.exists) {
            return Database.instance
        }

        this._initializeMovies();

        Database.instance = this;
    }

    _initializeMovies() {
        const filePath = path.join(__dirname, 'movies.json');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                this.movies = [];
                return;
            }
            
            try {
                this.movies = JSON.parse(data);
            } catch (parseErr) {
                this.movies = [];
            }
        });
    }

    getAllMovies() {
        this.movies.forEach((movie, index) => {
            console.log(`Movie ${index + 1}: Year data type is ${typeof movie.year}`);
          });
        return this.movies;
    }

    getMovie() {
        let result = this.movies.filter(obj => {
        return obj.id === 1 });
        return result;
    }
  
    addMovie(title, year, director, genre, rating) {
        const newMovie = { id: this.movies.length + 1, title, year, director, genre, rating };
        this.movies.push(newMovie); 
        return newMovie
        
    }

    deleteMovie(movieId) {
        const result = this.movies.findIndex(movie => movie.id === parseInt(movieId));

        if (result === -1)
            return null;

        const deletedMovie = this.movies.splice(result, 1)[0];
        return deletedMovie;
    }

    filterMovie(year) {
        console.log("Filtering movies for:", year);

        if (isNaN(year)) {
            console.error("Invalid year:", year);
            return [];
        }
    
        // Log the movies array
        console.log("Movies array:", this.movies);

        const filteredMovies = this.movies.filter(movie => { 
            console.log(`Checking movie with year ${movie.year} against ${year}`);
            return movie.year === year;
        });

        console.log("Filtered movies:", filteredMovies)
        
        return filteredMovies;
    }

}  

const instance = new Database();

module.exports = instance;