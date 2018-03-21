const pgp = require("pg-promise")();
const db  = pgp("postgres://postgres:postgres@localhost:5432/smiledu?application_name=backend");
var  app  = require('./app');
var  fs   = require('fs');
var port = process.env.PORT || 3978;  
db.connect();

app.listen(port, function(){
    console.log('Levanto correctamente en el puerto ' + port);
    console.log();
});

exports.conection = db;

