'use strict'

var db = require('../index');
function getPersonas(respuesta){
    var sql = `SELECT nid_persona,
                      nom_persona,
                      ape_pate_pers,
                      ape_mate_pers,
                      fec_naci,
                      nro_documento
                 FROM persona
                LIMIT 10`;
    db.conection.any(sql)
    .then(function (data) {
        respuesta(data); 
    }) .catch(function (err) {
        console.log(err);
    });
}

function getPersonasFiltro(respuesta){
    var sql = `SELECT nid_persona,
                      nom_persona,
                      ape_pate_pers,
                      ape_mate_pers,
                      fec_naci,
                      nro_documento
                 FROM persona
                  WHERE nom_persona like  `;
    db.conection.any(sql)
    .then(function (data) {
        respuesta(data); 
    }) .catch(function (err) {
        console.log(err);
    });
}

module.exports = {
    getPersonas
}
