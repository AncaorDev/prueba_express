'use strict' 
var m_persona = require('../model/m_persona');

function getPersonas(req, res){
    var result = {};
    m_persona.getPersonas(function(data){
        result = data;
        res.status(200).send(result);
        console.log(result);
    });
}

function getPersonasFiltro(req, res){
    var result = {};
    m_persona.getPersonas(function(data){
        result = data;
        res.status(200).send(result);
        console.log(result);
    });
}


module.exports = {
    getPersonas
}
