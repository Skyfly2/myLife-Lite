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


// let reg = require('./routes/register.ts');
// reg('Joey', 'pass', 'Joey', 'Jimm', 'joey@gmail.com');



app.post('/register', (req, res) => {
    const data = req.body;
    console.log(data);

});

app.get('/test', (req, res) => {
    console.log('hello');
    res.json({ hello: 'Hello world' });
})

app.listen(4000, console.log('listening on 4000'));


let check = require('./routes/checkregistration.ts');
check('dsfsdfgds');