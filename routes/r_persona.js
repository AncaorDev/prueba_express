`use strict`

var express    = require('express');
var api        = express.Router();
var controller = require('../controller/c_persona');

api.get('/getPersonas', controller.getPersonas);
api.post('/getPersonas', controller.getPersonas);

module.exports = api; 




