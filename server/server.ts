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

app.post('/register', (req, res) => {
    const data = req.body;
    let reg = require('./routes/register.ts');
    reg(data.user, data.password, data.first, data.last, data.email, function (err, resp) {
        if (err) console.log(err);
        res = resp;
        console.log(res);
    });
});

app.get('/test', (req, res) => {
    console.log('hello');
    res.json({ hello: 'Hello world' });
})

app.listen(4000, console.log('listening on 4000'));


// let check = require('./routes/checkregistration.ts');
// check('dsfsdfgds');