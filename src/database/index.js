const mongoose = require('mongoose');
const config = require('../config');
const seed = require('./seeds/userSeed');

/**
 * * MONGODB CONECTION
 */
const db = mongoose
  .connect(
    `mongodb+srv://${config.dbConnection.username}:${config.dbConnection.password}@cluster0.bon2t.mongodb.net/${config.dbConnection.dbName}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    seed(100);
    console.log(`🚀 mongo ready !!`);
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * * EXPORT THE DB
 */
module.exports = db;
