'use strict' 
var m_permisos = require('../model/m_permisos');
function getPermisos(req, res){
    var result = {};
    m_permisos.getPermisos(function(data){
        result = data;
        res.status(200).send(result);
        console.log(result);
    });
}
module.exports = {
    getPermisos
}