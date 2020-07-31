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

module.exports = router;
