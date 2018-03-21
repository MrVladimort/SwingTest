"use strict";
const router = require('express-promise-router')();
const orderCtrl = require('../controllers/order.controller');

router.post('/', orderCtrl.createOrder);
router.get('/', orderCtrl.getOrders);

module.exports = router;
