module.exports = function (id, res) {
    let con = require('./connection.ts');
    let query = 'DELETE FROM tasks WHERE id=?';
    con.query(query, [id], (err, resp) => {
        if (err) return res(err, null);
        res(null, resp);
    });
}