const orderService = require('../services/order.service');
const HttpError = require('../error');
const logger = require('../logger');
const { validationResult } = require('express-validator/check');

module.exports.createOrder = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError(422, JSON.stringify(errors.mapped()));
    }

    logger.info(req.body);
    orderService.c

    res.json('ok');
};

module.exports.getOrders = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new HttpError(422, JSON.stringify(errors.mapped()));
    }
};
