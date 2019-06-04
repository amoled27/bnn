const path = require('path');
const fs = require('fs');
const Device = require('../models/device');
const isAuth = require('../middleware/isAuth');

exports.addDevice = (req, res) => {
    const device = new Device({
        name: req.body.name || '',
        imei: req.body.imei,
        voltage: req.body.voltage || 0,
        di: req.body.di || 1,
        siteName: req.body.siteName || '',
        date: req.body.date || '',
        time: req.body.time || '',
    });

    device.save().then(result => {
        res.status(201).json({
            message: 'Device added successfully!',
            device: result
        })
    }
    ).catch(err => {
        console.log(err);
    })
}

exports.deleteDevice = (req, res, next) => {
    const deviceId = req.params.deviceId;
    Device.findById(deviceId)
        .then(device => {
            if (!device) {
                const error = new Error('Device not found');
                error.statusCode = 404;
                throw (error);
            }
            //checked user
            return Device.findByIdAndRemove(device)
        })
        .then(result => {
            res.status(200).json({ message: 'Device deleted' })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}

exports.updateDevice = (req, res) => {
    const deviceId = req.params.deviceId;
    Device.findById(deviceId)
        .then(device => {
            if (!device) {
                const error = new Error('Device not found');
                error.statusCode = 404;
                throw (error);
            }
            device.name = req.body.name;
            device.imei = req.body.imei;
            device.voltage = req.body.voltage;
            device.di = req.body.di;
            device.siteName = req.body.siteName;
            device.time = req.body.time;

            device.save().then(resp => {
                res.status(201).json({
                    message: 'Device Updated successfully!',
                    device: resp
                })
            })
                .catch(err => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                })
        })

}

exports.getDevice = (req, res, next) => {
    console.log(req);
    const deviceImei = req.params.imei;
    console.log(deviceImei);
    Device.findOne({ imei: deviceImei})
        .then(device => {
            console.log(device)
            if (!device) {
                const error = new Error('Device not found');
                error.statusCode = 404;
                throw (error);
            }
            res.status(200).json({ voltage: device.voltage, isDeviceOn: device.isDeviceOn }); 
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}

exports.getAllDevices = (req, res, next) => {
    Device.find().then(device => {
        res.status(200).json({ message: 'Device details fetched', device: device })
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
}





// --------------

exports.getDeviceVoltage = (req, res) => {
    res.json({ data: { voltage: 3 } });
}

exports.getDeviceVoltageTwo = (req, res) => {
    res.json({ data: { voltage: 5 } });
}


exports.getInfo = (req, res) => {
    res.json({ data: { voltage: 7 } });
}

exports.postDeviceData = (req, res) => {

    // const device = new Device({
    //     data: req.body
    // });
    //  device.save()
    //  .then(result =>{
    //     res.json({ data: 'data saved'});
    //  })
    //  .catch( err => {
    //      console.log(err);
    //  });
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


// const fileData2 = path.join(path.dirname(process.mainModule.filename), 'data', 'data.txt');
    // fs.appendFile(fileData2, req.body + '###', function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //     res.json({ message: 'data saved' });

    // });