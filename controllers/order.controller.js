const orderService = require('../services/order.service');
const HttpError = require('../error');
const { validationResult } = require('express-validator/check');

module.exports.createOrder = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(422, JSON.stringify(errors.mapped()));


    const order = orderService.composeOrder(req.body);
    // await orderService.createOrder(order);

    res.json(order);
};

module.exports.getOrders = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new HttpError(422, JSON.stringify(errors.mapped()));

    const orders = await orderService.gerOrders();

    res.json(orders)
};
