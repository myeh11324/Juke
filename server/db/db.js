const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/juke2', {
  logging: false
})
 
//const {Artist, Album, Song} = require('./models')


module.exports = db
