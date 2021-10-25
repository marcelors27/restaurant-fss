'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cardapio-controller');

router.get('/', controller.get);
router.get('/balcao', controller.getTypeBalcao);

module.exports = router;