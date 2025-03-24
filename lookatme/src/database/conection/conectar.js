//importar los servicios del modelo
const workoutService = require("../../src/services/workoutService");
const mysql = require('mysql');
const conector = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'ROSEVI007',
    database : 'alimentoapp'
});

//chequeo la conexión a la base

conector.connect(error => {
    if (error) throw error;
    console.log('Conectado');
});