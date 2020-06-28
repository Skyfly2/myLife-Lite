module.exports = function (user, res) {
    let con = require('./connection.ts');

    // Query Database
    let query = 'SELECT name,date,description FROM tasks WHERE user=?';
    con.query(query, [user], (err, resp) => {
        if (err) return res(err, null);
        return res(null, resp);
    })
}