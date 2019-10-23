const { mongoose } = require('./app-utilities')

const db = require('./config/keys').MongoURI;

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const dbConnection = mongoose.connect(db, dbOptions)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

module.exports = {
    db,
    dbOptions,
    dbConnection
};