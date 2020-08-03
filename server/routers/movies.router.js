const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
  const query = `SELECT * FROM movies ORDER BY movies.id;`;

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

// use to pull complete movie information including genres agg on the obj
router.get('/details/:id', (req, res) => {
  const query = `SELECT movies.id, movies.title, movies.poster, movies.description, array_agg(genres.name) as genres FROM genres
  JOIN movies_genres ON genres.id = movies_genres.genre_id
  JOIN movies ON movies.id = movies_genres.movies_id
 WHERE movies.id=$1 GROUP BY movies.id ORDER BY movies.id;`;

  pool
    .query(query, [req.params.id])
    .then((dbResponse) => {
      const details = dbResponse.rows[0];
      res.send(details);
    })
    .catch((err) => {
      console.log(`That won't work ${err}`);
      res.sendStatus(500);
    });
});

router.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const updateInfo = req.body;
  const query = `UPDATE movies SET title=$1, description=$2 WHERE id=$3;`;

  pool
    .query(query, [updateInfo.title, updateInfo.description, updateInfo.id])
    .then((dbResponse) => {
      console.log(dbResponse);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
