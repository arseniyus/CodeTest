# Code Test

This is a relatively straight forward test. This is an express.js API which currently stores movies. It stores the movies in a database singleton in code, removing the need for a database connection.

**Warning**: The movies will only persist for the lifetime running of the API.

## Startup
Firstly run `npm install` to install necessary packages (just express).

Run `node server.js` to start the application.

The app will be running at [http://localhost:3000](http://localhost:3000).

## Rules and tips
- You can use any resource at your disposal APART FROM CHATGPT.
- Think out loud. The interviewer wants to understand your thought process. and understanding.
- Show off technical skills, but don't fall down rabbit holes. Stay task focused.

## TODO List
You will have 30 mins to implement as many of these as you can.  You're not expected to finish them all.
1. Add an endpoint to create a movie in the same format. 
2. Create an endpoint to delete a movie. 
3. Create an endpoint to filter movies by year and then test with the year 1999 (you should get two movies).
4. Create an endpoint to filter movies by rating. (Movies with a rating of 5 or more for example).
5. Create an endpoint to update a movie.
6. Create an endpoint to get a single movie (by any means you choose).✅

// CRUD Operations
is Create 