
const express = require('express');
const controller = require('../controller/vehicleController');

const router = express.Router();

router.get('/generate-schedule', controller.handleMaintenanceSchedule);

module.exports = router;