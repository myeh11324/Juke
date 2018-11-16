

const router = require('express').Router();
const {db, Album, Artist, Song} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const allAlbums = await Album.findAll({include: [Artist]});
    res.json(allAlbums);
  } catch(err) {
      next(err);
  }
});

router.get('/:albumid', async (req, res, next) => {
  try {

  } catch (err) {
      next(err);
  }
});


module.exports = router;





// const express = require('express');
// const router = express.Router();
// const {db, Album, Artist, Song} = require('../db')


// router.get("/api/albums", (req, res, next) => {
//       Album.findAll({
//         attributes: ['id', 'name', 'artworkUrl']
//       })
//       .then(album => res.json(album))
//       .catch(next)
//   })

// module.exports = router;