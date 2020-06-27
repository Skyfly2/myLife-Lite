const bcrypt = require('bcrypt');
let con = require('./connection.ts');

module.exports = async function register(user, pass, first, last, email, cb) {
    let query = 'INSERT INTO users (user, password, first, last, email) VALUES (?,?,?,?,?)';
    bcrypt.hash(pass, 10, (err, hash) => {
        con.query(query, [user, hash, first, last, email], (err, res) => {
            if (err) cb(err, 0);
            cb(0, res);
        });
    });

}
