const Area = require('../models/area');
const isAuth = require('../middleware/isAuth');

exports.addArea = (req, res) => {
    const area = new Area({
        name: req.body.name,
        location: req.body.location,
        areaShortName: req.body.areaShortName
    });

    area.save().then(result => {
        res.status(201).json({
            message: 'Area added successfully!',
            area: result
        })
    }
    ).catch(err => {
        console.log(err);
    })
}


exports.getAllAreas = (req, res, next) => {
    Area.find().then( area => {
        res.status(200).json({ message: 'Areas fetched successfully', areas: area})
    })
}
