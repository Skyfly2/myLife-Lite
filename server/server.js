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
    let reg = require('./scripts/register.ts');
    let check = require('./scripts/checkregistration.ts');

    // Validate name isn't taken
    check(data.user, resp => {
        if (resp) {

            // Register the user
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
    let log = require('./scripts/login.ts');

    // Login user
    log(data.user, data.password, resp => {
        if (resp) {
            res.json({ status: 'success' });
        }
        else if (resp === 0) {
            // Handle error
            res.json({ status: 'blank-field' });
        }
        else {
            // Handle error
            res.json({ status: 'failed' });
        }
    })
});

// Create Task
app.post('/create', (req, res) => {
    const data = req.body;
    let create = require('./scripts/createtask.ts');

    // Query task to database
    create(data.name, data.date, data.desc, data.user, (err, resp) => {
        if (err) {
            // Handle error
            console.log(err);
        }
        else if (resp) {
            res.json({ status: 'success' });
        }
    });
});

// Get Tasks
app.get('/gettasks', (req, res) => {
    const user = req.query.user;
    let date;
    if (req.query.date) {
        date = req.query.date.slice(0, 10);
    }
    resp = {};
    resp.names = []; resp.desc = []; resp.dates = []; resp.ids = []
    let gettasks = require('./scripts/gettasks.ts');
    // Retrieve tasks belonging to the user
    gettasks(user, date, (err, response) => {
        if (err) return console.log(err);
        try {
            for (let c = 0; c < response.length; c++) {
                // Add data to what will be the response
                resp.names.push(response[c].name);
                resp.desc.push(response[c].description);
                resp.dates.push(response[c].date);
                resp.ids.push(response[c].id);
            }
        }
        catch (e) {
            // Catch errors
            console.log(e.message);
        }
        finally {
            res.json(resp);
        }
    })
});

// Complete Tasks
app.delete('/complete', (req, res) => {
    const data = req.query.id;
    let com = require('./scripts/complete.ts');
    com(data, (err, resp) => {
        if (err) return console.log(err);
        res.json(resp);
    });
});

// Update Tasks
app.put('/update', (req, res) => {
    const data = req.body;
    let edit = require('./scripts/edittask.ts');
    edit(data, (err, resp) => {
        if (err) {
            res.json({ status: 'failed' });
            return console.log(err);
        }
        res.json({ status: 'success' });
    })
})



app.listen(4000, console.log('listening on 4000'));


