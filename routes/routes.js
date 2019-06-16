const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const deviceController = require('../controllers/device');

router.post('/deviceData', deviceController.postDeviceData);
router.get('/deviceData', deviceController.getDeviceData);

router.post('/add-device', deviceController.addDevice);
router.get('/devicedata/:imei', deviceController.getDevice);

router.get('/alldevicedata', deviceController.getAllDevices);
router.post('/devicedata/:imei', deviceController.updateDevice);
router.delete('/delete-device/:deviceId', deviceController.deleteDevice);
router.get('/devicebygroup/:groupId', deviceController.getDeviceOnGroupId);

module.exports = router;