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

router.get('/details/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT "genres"."name", movies.title FROM genres
  JOIN movies_genres ON genres.id = movies_genres.genre_id
  JOIN movies ON movies.id = movies_genres.movies_id
  WHERE movies.id=$1;`;

  pool
    .query(query, [id])
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
