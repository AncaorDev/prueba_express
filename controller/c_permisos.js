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
    m_permisos.getPermisosbyIdModulo(req.body,(data)=>{
        res.status(200).send(data);
    });
    
}

module.exports = {
    getPermisos,
    getModulos,
    getPermisosbyIdModulo
}