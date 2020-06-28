const bcrypt = require('bcrypt');
let con = require('./connection.ts');

module.exports = async function register(user, pass, first, last, email, res) {
    let query = 'INSERT INTO users (user, password, first, last, email) VALUES (?,?,?,?,?)';
    bcrypt.hash(pass, 10, (err, hash) => {
        con.query(query, [user, hash, first, last, email], (err, resp) => {
            if (err) res(err, 0);
            res(0, resp);
        });
    });

}
