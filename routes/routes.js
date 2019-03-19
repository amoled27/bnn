const express = require('express');
const router = express.Router();

const deviceController = require('../controllers/device');

router.post('/deviceData', deviceController.postDeviceData)
router.get('/deviceData', deviceController.getDeviceData)

module.exports = router;