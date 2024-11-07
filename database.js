var mysql2 = require ("mysql2");
var connection = mysql2.createConnection({
    host: 'localhost',
    database: 'hospital_db',
    user: 'root',
    password: '123456'
});

module.export = connection;