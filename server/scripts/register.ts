module.exports = async function register(user, pass, first, last, email, res) {
    const bcrypt = require('bcrypt');
    let con = require('./connection.ts');
    let query = 'INSERT INTO users (user, password, first, last, email) VALUES (?,?,?,?,?)';

    // Hash Password
    bcrypt.hash(pass, 10, (err, hash) => {
        // Query Database
        con.query(query, [user, hash, first, last, email], (err, resp) => {
            if (err) res(err, 0);
            res(0, resp);
        });
    });

}
