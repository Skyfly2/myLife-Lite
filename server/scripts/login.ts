const bcrypt = require('bcrypt');
let con = require('./connection.ts');

module.exports = async function login(user, pass, res) {
    let query = `SELECT password FROM users WHERE user=?`;
    if (user === '' || pass === '') {
        return res(0);
    }
    else {
        con.query(query, [user], (err, resp) => {
            if (resp[0]) {
                bcrypt.compare(pass, resp[0].password, (err, response) => {
                    if (response) {
                        res(true);
                    } else {
                        res(false);
                    }
                });
            }
            else {
                res(false);
            }
        })
    }
}