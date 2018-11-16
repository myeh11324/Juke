

const router = require('express').Router();
const {db, Album, Artist, Song} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const allAlbums = await Album.findAll({include: [Artist]});
    //const allAlbums = await Album.findAll();
    res.json(allAlbums);
  } catch(err) {
      next(err);
  }
});

router.get('/:albumId', async (req, res, next) => {
  try {
    //For a single album, join info for artist and songs: 
    const id = req.params.albumId
    const singleAlbum = await Album.findById(id, {include: [Artist, Song]});
    //const resultAlbum = await singleAlbum.findAll({include: [{Artist, include: [{Song}]}]});
    res.json(singleAlbum);
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