const express = require('express');
const router = require('./routes');
var cors = require('cors');
var bodyParser = require('body-parser');
require('./database');

/**
 * * CREATE APP
 */
const app = express();

/**
 * * MIDDLEWARE
 */
app.use(bodyParser.json());
app.use(cors());

/**
 * * ROUTES
 */
app.use('/api', router);

/**
 * * START SERVER
 */
const PORT = process.env.PORT;
app.listen(PORT || 4000, () => console.log('Server start on ' + PORT));
