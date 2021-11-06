const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, `.env.${process.env.NODE_ENV}`),
});

app.get('/', (req, res, next) => {
    res.send('Hello world');
});

module.exports = app;
