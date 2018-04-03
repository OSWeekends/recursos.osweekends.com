var express = require('express');
var router = express.Router();
var resourcesControllers = require('../controllers/resources.js')

router.get('/resources', resourcesControllers.list);

module.exports = router;