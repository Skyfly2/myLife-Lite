module.exports = function (name, date, desc, user, res) {
    let con = require('./connection.ts');
    let query = 'INSERT INTO tasks (name, date, description, user) VALUES (?,?,?,?)';
    con.query(query, [name, date, desc, user], (err, resp) => {
        if (err) return (res(err, null));
        res(null, true);
    });
}