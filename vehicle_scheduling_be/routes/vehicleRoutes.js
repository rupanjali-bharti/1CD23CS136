const express = require('express');
const router = express.Router();
const { handleMaintenanceSchedule } = require('../controller/vehicleController');

router.get('/generate-schedule', handleMaintenanceSchedule);

module.exports = router;