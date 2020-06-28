let con = require('./connection.ts');

module.exports = async function check(req, res) {
    let query = `SELECT user FROM users WHERE user=?`;
    con.query(query, [req], async (err, resp) => {
        if (err) return (console.log(err));
        if (resp.length == 0) {
            return res(true);
        }
        return res(false);
    });
}
