const path = require('path');
const fs = require('fs');
const Device = require('../models/device');
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
   
    // const fileData2 = path.join(path.dirname(process.mainModule.filename), 'data', 'data.txt');
    // fs.appendFile(fileData2, req.body + '###', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //     res.json({ message: 'data saved' });

    // });

    const device = new Device({
        data: req.body
    });
     device.save()
     .then(result =>{
        res.json({ data: 'data saved'});
     })
     .catch( err => {
         console.log(err);
     });
}


exports.postDeviceDataxx = (req, res) => {

    const fileData2 = path.join(path.dirname(process.mainModule.filename), 'data', 'data.txt');
    fs.appendFile(fileData2, '' + '###', function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.json({ message: 'data saved lol' });

    });
}
exports.getDeviceData = (req, res) => {
    let max = 10;
    let min = 1;
    let k = Math.floor(Math.random() * (+max - +min)) + +min;
    console.log(k);
    res.json({ data: { voltage: k } });
}
