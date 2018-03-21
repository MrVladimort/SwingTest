"use strict";
const router = require('express-promise-router')();
const orderCtrl = require('../controllers/order.controller');
const orderValidator = require('../validators/order.validator');

router.post('/', orderValidator.validateCreateOrder, orderCtrl.createOrder);
router.get('/', orderCtrl.getOrders);

module.exports = router;
