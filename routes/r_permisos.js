`use strict`

var express    = require('express');
var api        = express.Router();
var controller = require('../controller/c_permisos');

api.get('/getPermisos'           , controller.getPermisos);
api.get('/getModulos'            , controller.getModulos);
api.post('/getPermisosbyIdModulo' , controller.getPermisosbyIdModulo);

module.exports = api; 