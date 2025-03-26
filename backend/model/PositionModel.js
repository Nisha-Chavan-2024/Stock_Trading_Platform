const { model } = require('mongoose'); // aqiuring model from mongoose
const { positionSchema } = require('../schemas/positionSchema'); // aqiuring schema from schema folder

const PositionModel = model('position', positionSchema); // creating model

module.exports = { PositionModel }; // exporting model