const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const hostname = 'localhost'
const database = 'journal'

mongoose.connect(`mongodb://${hostname}/${database}`, { useMongoClient: true })