const bcrypt = require('bcrypt');
let con = require('./connection.ts');

module.exports = async function login(user, pass, res) {
    let query = `SELECT password FROM users WHERE user=?`;
    con.query(query, [user], (err, resp) => {
        bcrypt.compare(pass, resp[0].password, function (err, response) {
            if (response) {
                res(true);
            } else {
                res(false);
            }
        });
    })
}