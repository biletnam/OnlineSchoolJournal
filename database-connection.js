const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const hostname = 'localhose'
const database = 'journal'

mongoose.connect(`mongodb://${hostname}/${database}`, { useMongoClient: true});