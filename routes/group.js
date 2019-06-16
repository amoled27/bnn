const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const groupController = require('../controllers/group');

router.post('/addgroup', groupController.addGroup);
router.get('/allgroups', groupController.getAllGroups);
router.put('/setgroupvoltage', groupController.setGroupVoltage);

module.exports = router;