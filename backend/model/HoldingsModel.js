const {model} = require('mongoose'); // aqiuring model from mongoose
const { holdingsSchema } = require('../schemas/holdingsSchema'); // aqiuring schema from schema folder

const HoldingsModel = model('holding', holdingsSchema); // creating model

module.exports = { HoldingsModel }; // exporting model