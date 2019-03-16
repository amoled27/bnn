const path = require('path');
const fs = require('fs');

exports.getDeviceVoltage = (req, res) => {
    res.json({ data: { voltage: 3 } });
}

exports.getDeviceVoltageTwo = (req, res) => {
    res.json({ data: { voltage: 5 } });
}


exports.getDeviceVoltageThree = (req, res) => {
    res.json({ data: { voltage: 7 } });
}

exports.postDeviceData = (req,res) => {
    const fileData = path.join(path.dirname(process.mainModule.filename), 'data', 'data.json');
    fs.appendFile(fileData, JSON.stringify(req.body), function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.json({ message: 'data saved'});
    });
}