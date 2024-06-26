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

} 

const instance = new Database();

module.exports = instance;