let passwordhash = require('password-hash');
let con = require('./connection.ts');

module.exports = async function register(user, pass, first, last, email, cb) {

    let query = 'INSERT INTO users (user, password, first, last, email) VALUES (?,?,?,?,?)';
    let hashedPass = passwordhash.generate(pass);
    con.query(query, [user, hashedPass, first, last, email], function (err, res) {
        if (err) cb(err, 0);
        cb(0, res);
    })
}
