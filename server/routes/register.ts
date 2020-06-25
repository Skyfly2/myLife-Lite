let passwordhash = require('password-hash');
let con = require('./connection.ts');

module.exports = async function register(user, pass, first, last, email) {

    let query = 'INSERT INTO users (user, password, first, last, email) VALUES (?,?,?,?,?)';
    let hashedPass = passwordhash.generate(pass);
    console.log(hashedPass);
    let result = await con.query(query, [user, hashedPass, first, last, email], function (err, res) {
        if (err) throw err;
    });
    console.log(result);
}
