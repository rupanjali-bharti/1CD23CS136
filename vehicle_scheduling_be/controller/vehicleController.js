
const { Log } = require('../../logging_middleware/logger'); 
const { maximizeImpact } = require('../scheduler/vehicleScheduler');

const handleMaintenanceSchedule = (req, res) => {

    Log('Backend', 'INFO', 'vehicleController', 'Started generating maintenance schedule');

    const depotUrl = process.env.DEPOT_API_URL;
    const vehiclesUrl = process.env.VEHICLES_API_URL;

    Promise.all([
        fetch(depotUrl).then(response => response.json()),
        fetch(vehiclesUrl).then(response => response.json())
    ])
    .then(([depotData, vehicleData]) => {
        const budget = depotData.depots[0].MechanicHours; 
        const tasks = vehicleData.vehicles;
        const result = maximizeImpact(tasks, budget);

        Log('Backend', 'INFO', 'vehicleController', 'Successfully generated optimal schedule');

        res.status(200).json({ message: 'Success', result });
    })
    .catch(error => {
        Log('Backend', 'ERROR', 'vehicleController', 'Failed to generate schedule: ' + error.message);
        res.status(500).json({ error: 'Internal server error' });
    });
};

module.exports = { handleMaintenanceSchedule };