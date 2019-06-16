const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: String,
    areaId: {
        type: Schema.Types.ObjectId,
        ref: 'Area',
        required: true
    },
    recentVoltage: Number
}, { timestamps: true });
module.exports = mongoose.model('Group', groupSchema);