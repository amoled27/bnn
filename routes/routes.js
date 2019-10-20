const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const deviceController = require('../controllers/device');

router.post('/deviceData', deviceController.postDeviceData);
router.get('/test', deviceController.test);
router.get('/deviceData', deviceController.getDeviceData);



router.post('/add-device', isAuth, deviceController.addDevice);
router.get('/devicedata/:imei', deviceController.getDevice);

router.get('/alldevicedata', isAuth, deviceController.getAllDevices);
router.post('/devicedata/:imei', deviceController.updateDevice);
router.delete('/delete-device/:deviceId', isAuth, deviceController.deleteDevice);
router.get('/devicebygroup/:groupId',isAuth, deviceController.getDeviceOnGroupId);

module.exports = router;