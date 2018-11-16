
const router = require('express').Router();

// connect your API routes here!
const albums = require('./album');
router.use('/albums', albums);


module.exports = router;