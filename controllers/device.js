const path = require('path');
const fs = require('fs');

exports.getDeviceVoltage = (req, res) => {
    res.json({ data: { voltage: 3 } });
}

exports.getDeviceVoltageTwo = (req, res) => {
    res.json({ data: { voltage: 5 } });
}


exports.getInfo = (req, res) => {
    res.json({ data: { voltage: 7 } });
}

exports.postDeviceData = (req,res) => {
   
    const fileData2 = path.join(path.dirname(process.mainModule.filename), 'data', 'data.txt');
    fs.appendFile(fileData2, req.body + '###', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    const fileData = path.join(path.dirname(process.mainModule.filename), 'data', 'data.json');
    fs.appendFile(fileData, JSON.stringify(req.body) + '###', function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.json({ message: 'data saved' });

    });
}
exports.getDeviceData = (req, res) => {
    let max = 10;
    let min = 1;
    let k = Math.floor(Math.random() * (+max - +min)) + +min;
    console.log(k);
    res.json({ data: { voltage: k } });
}
