const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json);
app.use(express.urlencoded({ extended: false }));

app.listen(3000, console.log('listening on 3000'));


let reg = require('./register.ts');
reg('Joey', 'pass', 'Joey', 'Jimm', 'joey@gmail.com');
