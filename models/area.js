const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const areaSchema = new Schema({
    name: String,
    location: String,
    areaShortName: String
}, { timestamps: true });
module.exports = mongoose.model('Area', areaSchema);