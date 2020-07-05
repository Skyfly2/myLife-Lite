module.exports = function (user, date, res) {
    let con = require('./connection.ts');

    if (date) {
        // Query database for specific date
        let query = 'SELECT name,date,description,id FROM tasks WHERE user=? AND date=?';
        con.query(query, [user, date], (err, resp) => {
            if (err) return res(err, null);
            return res(null, resp);
        });
    }
    else {
        // Query Database generally
        let query = 'SELECT name,date,description,id FROM tasks WHERE user=? ORDER BY date';
        con.query(query, [user], (err, resp) => {
            if (err) return res(err, null);
            return res(null, resp);
        });
    }
}