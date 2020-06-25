let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'mylife-lite'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Successfully Connected');
});

module.exports = connection;