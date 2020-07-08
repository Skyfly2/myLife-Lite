module.exports = function edit(data, res) {
    let con = require('./connection.ts');
    if (data.date) {
        let query = 'UPDATE tasks SET name=?, date=?, description=? WHERE id=?';
        con.query(query, [data.name, data.date, data.desc, data.id], (err, resp) => {
            if (err) return res(err, null);
            return res(null, resp);
        });
    }
    else {
        let query = 'UPDATE tasks SET name=?, description=? WHERE id=?';
        con.query(query, [data.name, data.desc, data.id], (err, resp) => {
            if (err) return res(err, null);
            return res(null, resp);
        });
    }
}