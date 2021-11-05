const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('dotenv').config();

app.get('/', (req, res, next) => {
    res.send('Hello world');
});

module.exports = app;
