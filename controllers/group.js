const Group = require('../models/group');
const isAuth = require('../middleware/isAuth');
const Device = require('../models/device');

exports.addGroup = (req, res) => {
    const group = new Group({
        name: req.body.name,
        areaId: req.body.areaId
    });

    group.save().then(result => {
        res.status(201).json({
            message: 'Group added successfully!',
            group: result
        });
    }
    ).catch(err => {
        console.log(err);
    });
}


exports.getAllGroups = (req, res, next) => {

    Group.find().populate('areaId') .then ( grp => {
        res.status(200).json({ message: 'Groups fetched successfully', groups: grp })
    }).catch( err => {

    });
}

exports.setGroupVoltage = (req, res, next) => {
    let groupId = req.body.groupId;
    let voltage = req.body.voltage;
    Group.findById(groupId).then(group => {
        if (!group) {
            const error = new Error('Group not found');
            error.statusCode = 404;
            throw (error);
        }
        group.recentVoltage = voltage ? voltage : group.recentVoltage;
        return group.save();
    }).then(resp => {
       return Device.update({ groupId : groupId}, { voltage: voltage}, { multi: true });
      
    }).then( resul => {
        res.status(201).json({
            message: 'Group Voltage set successfully!',
            voltage: resul
        });
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        console.log(err)
        // next(err);
    })
}
