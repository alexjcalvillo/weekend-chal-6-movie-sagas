const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const query = `SELECT * FROM movies;`;

  pool
    .query(query)
    .then((dbResponse) => {
      const movies = dbResponse.rows; // pull the data out of the response as movies
      res.send(movies);
    })
    .catch((err) => {
      console.log(`Yikes, and error: ${err}`);
      res.sendStatus(500);
    });
});

router.get('/complete', (req, res) => {
  const query = `SELECT movies.id, movies.title, movies.poster, movies.description, array_agg(genres.name) as genres FROM genres
  JOIN movies_genres ON genres.id = movies_genres.genre_id
  JOIN movies ON movies.id = movies_genres.movies_id
 GROUP BY movies.id ORDER BY movies.id;`;

  pool
    .query(query)
    .then((dbResponse) => {
      const details = dbResponse.rows;
      res.send(details);
    })
    .catch((err) => {
      console.log(`That won't work ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
