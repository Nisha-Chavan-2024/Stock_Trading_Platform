const { model} = require('mongoose'); // aqiuring model from mongoose
const { ordersSchema } = require('../schemas/ordersSchema'); // aqiuring schema from schema folder

const OrdersModel = model('order', ordersSchema); // creating model

module.exports = { OrdersModel }; // exporting model