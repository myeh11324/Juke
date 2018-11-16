const db = require('./db')
// require each of your models here...

// ...and give them some nice associations here!

const {Album, Artist, Song} = require('./models')



Album.belongsTo(Artist)
Artist.hasMany(Album)

Song.belongsTo(Album)
Album.hasMany(Song)

Song.belongsTo(Artist)
Artist.hasMany(Song)


module.exports = {
  db, Album, Artist, Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}
