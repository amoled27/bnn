const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
    name: String,
    imei: {
        type: String,
        required: true
    },
    voltage: {
        type: Number,
        default: 3
    },
    di: {
        type: Number
    },
    siteName: String,
    deviceTimestamp: String,
    poleId: String,
    isDeviceOn: {
        type: Number,
        default: 0
    }, 
    poleId : String,
    batVoltage: String
}, { timestamps: true });
// #AT3V
module.exports = mongoose.model('Device', deviceSchema);