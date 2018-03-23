'use strict'

var db = require('../index');
function getPermisos(respuesta){
    var sql = `SELECT sp.desc_permiso,
                      sp.nid_permiso,
                      sp.id_obj_html,
                      s.desc_sist,
                      s.nid_sistema,
                      sp.flg_habilitado,
                      CASE WHEN sp.flg_habilitado IS NULL OR sp.flg_habilitado='N'
                            THEN 'Deshabilitado'
                            ELSE 'Habilitado'
                      END text_habilitado 
                 FROM sist_permiso sp, 
                      sistema s
                WHERE s.nid_sistema=sp.nid_sistema 
                ORDER BY sp.nid_permiso`;
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
    var sql = `SELECT sp.desc_permiso,
                    sp.nid_permiso,
                    sp.id_obj_html,
                    s.desc_sist,
                    s.nid_sistema,
                    sp.flg_habilitado,
                    CASE WHEN sp.flg_habilitado IS NULL OR sp.flg_habilitado='N'
                        THEN 'Deshabilitado'
                        ELSE 'Habilitado'
                    END text_habilitado 
                FROM sist_permiso sp, 
                    sistema s
                WHERE s.nid_sistema=sp.nid_sistema
                  AND s.nid_sistema = $1 
                  ORDER BY sp.nid_permiso`;
    db.conection.any(sql, [id.id_modulo])
    .then(function (data) {
        respuesta(data); 
    }) .catch(function (err) {
        console.log(err);
    });
}

function updPermisobyId(json_update, respuesta) {
    var sql = `UPDATE sist_permiso 
                  SET flg_habilitado = $1 
                WHERE nid_permiso = $2`;
    db.conection.any(sql, [json_update.flg_habilitado, json_update.nid_permiso ])
    .then(function (data) {
        respuesta(data); 
    }) .catch(function (err) {
        console.log(err);
    });
}

module.exports = {
    getPermisos,
    getModulos,
    getPermisosbyIdModulo,
    updPermisobyId
}