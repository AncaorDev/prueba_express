`use strict`

var express    = require('express');
var api        = express.Router();
var controller = require('../controller/c_permisos');

api.get('/getPermisos', controller.getPermisos);
module.exports = api; 