var express    = require('express');
var r_persona  = require('./routes/r_persona');
var bodyParser = require('body-parser');
var app 	   = express();
var cors       = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/persona', r_persona);
module.exports = app;



