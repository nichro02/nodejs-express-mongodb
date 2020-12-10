//index.js will bring all of our models together
const dbConfig = require('../config/db.config.js')

//mongoose middleware
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//Default setup of mongoose
//create empty db object and pass values to be used for setup
const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
//require tutorial model and pass in mongoose middleware
db.tutorials = require('./tutorial.model.js')(mongoose)

module.exports = db