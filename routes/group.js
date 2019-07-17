const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const groupController = require('../controllers/group');

router.post('/addgroup', isAuth, groupController.addGroup);
router.get('/allgroups', isAuth, groupController.getAllGroups);
router.put('/setgroupvoltage', isAuth, groupController.setGroupVoltage);

module.exports = router;