'use strict'

var db = require('../index');
function getPermisos(respuesta){
    var sql = `SELECT sp.desc_permiso,
                      sp.id_obj_html,
                      s.desc_sist,
                      s.nid_sistema 
                 FROM sist_permiso sp, 
                      sistema s
                WHERE s.nid_sistema=sp.nid_sistema`;
    db.conection.any(sql)
    .then(function (data) {
        respuesta(data); 
    }) .catch(function (err) {
        console.log(err);
    });
}

function getModulos(respuesta) {
    var sql = `SELECT s.desc_sist,
                      s.nid_sistema 
                 FROM sistema s`;
    db.conection.any(sql)
    .then(function (data) {
        respuesta(data); 
    }) .catch(function (err) {
        console.log(err);
    });
}

function getPermisosbyIdModulo(id , respuesta) {
    var sql = `SELECT s.nid_sistema,
                      s.desc_sist , 
                      sp.desc_permiso, 
                      sp.flg_habilitado
                 FROM sistema s , sist_permiso sp
                WHERE s.nid_sistema = sp.nid_sistema
                  AND s.nid_sistema = $1`;
    db.conection.any(sql, [id.id_modulo])
    .then(function (data) {
        respuesta(data); 
    }) .catch(function (err) {
        console.log(err);
    });
}

module.exports = {
    getPermisos,
    getModulos,
    getPermisosbyIdModulo
}