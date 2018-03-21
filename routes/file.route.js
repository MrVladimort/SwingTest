"use strict";
const router = require('express-promise-router')();
const filesCtrl = require('../controllers/file.controller');

router.get('/files/price', filesCtrl.getPriceFile);

module.exports = router;
