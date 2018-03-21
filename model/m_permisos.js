'use strict'

var db = require('../index');
function getPermisos(respuesta){
    var sql = `SELECT desc_permiso,
                      id_obj_html,
                      desc_sist,
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
module.exports = {
    getPermisos
}