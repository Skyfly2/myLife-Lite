module.exports = async function login(user, pass, res) {
    const bcrypt = require('bcrypt');
    let con = require('./connection.ts');
    let query = `SELECT password FROM users WHERE user=?`;

    // Make sure fields are valid
    if (user === '' || pass === '') {
        return res(0);
    }
    else {
        // Query Database
        con.query(query, [user], (err, resp) => {
            if (resp[0]) {
                // Validate password
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