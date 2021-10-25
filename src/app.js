const express = require('express');



const app = express();
const router = express.Router();

const mongoose = require('mongoose');
const config = require('./config');

const Menu = require('./repositories/menu-model');

const index = require('./routes/index');
const cardapio = require('./routes/cardapio');

mongoose.connect(config.connectionString);

app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.use('/', index);
app.use('/cardapio', cardapio);

module.exports = app;