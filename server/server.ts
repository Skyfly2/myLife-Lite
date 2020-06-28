// App config
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Register User
app.post('/register', (req, res) => {
    const data = req.body;
    let reg = require('./routes/register.ts');
    let check = require('./routes/checkregistration.ts');
    check(data.user, resp => {
        if (resp) {
            reg(data.user, data.password, data.first, data.last, data.email, (err, resp) => {
                if (err) return console.log(err);
                res.json({ status: 'success' });
            });
        }
        else {
            res.json({ status: 'failed' });
        }
    })

});

// Validate Login
app.post('/login', (req, res) => {
    const data = req.body;
    let log = require('./routes/login.ts');
    log(data.user, data.password, resp => {
        if (resp) {
            res.json({ status: 'success' });
        }
        else if (resp === 0) {
            res.json({ status: 'blank-field' });
        }
        else {
            res.json({ status: 'failed' });
        }
    })
})

app.listen(4000, console.log('listening on 4000'));


