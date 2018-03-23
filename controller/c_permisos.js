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

function getModulos(req, res){
    var result = {};
    m_permisos.getModulos(function(data){
        result = data;
        res.status(200).send(result);
        console.log(result);
    });
}

function getPermisosbyIdModulo(req, res) {
    var id_modulo = req.body.id_modulo;
    m_permisos.getPermisosbyIdModulo(req.body, data => {
        res.status(200).send(data);
    });  
}

function updPermisobyId(req, res) {
    var json_update = req.body;
    m_permisos.updPermisobyId( json_update , data => {
        res.status(200).send(data);
    }); 
}

module.exports = {
    getPermisos,
    getModulos,
    getPermisosbyIdModulo,
    updPermisobyId
}