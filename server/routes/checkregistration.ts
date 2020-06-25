let con = require('./connection.ts');

module.exports = async function check(req, res) {
    let query = `SELECT user FROM users WHERE user=?`;

    let result = await con.query(query, [req], async function (err, resp) {
        if (err) throw err;
        result = await getVal(resp);
        return resp;
    });
    console.log(result);
}

async function getVal(res) {
    return res;
}