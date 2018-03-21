const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loadSchema = new Schema({
   id: {
       type: String,
       required: true
   },
    weight: {
       type: Number,
        required: true
    }
},{ _id : false });

const truckSchema = new Schema({
    truckID: {
        required: true,
        type: String,
        trim: true
    },
    load: [
        loadSchema
    ]
},{ _id : false });

const orderSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    trucks: [
        truckSchema
    ]
});

module.exports = mongoose.model('order', orderSchema);
