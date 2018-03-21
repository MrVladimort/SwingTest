const _ = require('lodash');
const uuid = require('uuid/v1');
const orderModel = require('../models/order.model');

const calcPackagePrice = (weight) => {
    if (weight <= 400) return 0.01 * weight;
    else return 2 + 0.005 * weight;
};

module.exports.composeOrder = (orderArray) => {
    let sortedArray = _.sortBy(orderArray, order => order.weight);
    let order = {
        price: 0.0,
        trucks: []
    };

    while (!_.isEmpty(sortedArray)) {
        let truckWeight = 0, popIndex = [];
        const truck = {
            truckID: uuid(),
            load: []
        };

        if (sortedArray.length > 1) {
            for (let i = 0; i < sortedArray.length; i++) {
                const load = sortedArray[i];
                if (truckWeight + load.weight < 1000) {
                    truckWeight += load.weight;
                    order.price += calcPackagePrice(load.weight);
                    truck.load.push(load);
                    popIndex.push(i);
                }
            }
        } else {
            const load = sortedArray[0];
            order.price += calcPackagePrice(load.weight);
            truck.load.push(load);
            popIndex.push(0);
        }

        order.trucks.push(truck);
        popIndex.forEach((sortedIndex, index) => sortedArray.splice(sortedIndex - index, 1));
    }

    return order;
};

module.exports.createOrder = async (orderData) => await orderModel.create(orderData);

module.exports.gerOrders = async () => await orderModel.find();