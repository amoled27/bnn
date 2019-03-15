const express = require('express');
const router = express.Router();

const deviceController = require('../controllers/device');

router.get('/currentVol', deviceController.getDeviceVoltage);
router.get('/currentVolA', deviceController.getDeviceVoltageTwo);
router.get('/currentVolB', deviceController.getDeviceVoltageThree);
router.post('/deviceData', deviceController.postDeviceData)

module.exports = router;