const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const areaController = require('../controllers/area');

router.post('/addarea', areaController.addArea);
router.get('/allareas', areaController.getAllAreas);

module.exports = router;