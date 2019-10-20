const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const areaController = require('../controllers/area');

router.post('/addarea', isAuth, areaController.addArea);
router.get('/allareas', isAuth, areaController.getAllAreas);

module.exports = router;