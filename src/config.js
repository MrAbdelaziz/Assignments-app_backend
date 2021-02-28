const dotenv = require('dotenv');

/**
 * * .ENV CONFIG
 */
dotenv.config({
  path: './.env',
});

module.exports = {
  dbConnection: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  },
  accessTokenKey: process.env.ACCES_KEY_FOR_TOKEN,
};
