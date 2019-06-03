const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const deviceController = require('../controllers/device');

router.post('/deviceData', deviceController.postDeviceData);
router.get('/deviceData', deviceController.getDeviceData);

router.post('/add-device', isAuth, deviceController.addDevice);
router.get('/device-data/:deviceId', deviceController.getDevice);

router.get('/alldevicedata', deviceController.getAllDevices);
router.delete('/deleteDevice/:deviceId', isAuth, deviceController.deleteDevice);

module.exports = router;