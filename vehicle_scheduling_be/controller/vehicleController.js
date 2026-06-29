// to manage the apis 

const { Log } = require('../../logging_middleware/logger'); 
const { maximizeImpact } = require('../scheduler/vehicleScheduler');

const handleMaintenanceSchedule = async (req, res) => {
    try {
        await Log('Backend', 'INFO', 'vehicleController', 'Started generating maintenance schedule');

        const [depotRes, vehicleRes] = await Promise.all([
            fetch(process.env.DEPOT_API_URL),
            fetch(process.env.VEHICLES_API_URL)
        ]);

        if (!depotRes.ok || !vehicleRes.ok) {
            throw new Error('Failed to fetch from evaluation APIs');
        }

        const depotData = await depotRes.json();
        const vehicleData = await vehicleRes.json();

        // Assuming we are scheduling for the first depot in the array
        const budget = depotData.depots[0].MechanicHours; 
        const tasks = vehicleData.vehicles;

        // Run the algorithm
        const result = maximizeImpact(tasks, budget);

        await Log('Backend', 'INFO', 'vehicleController', 'Successfully generated optimal schedule');
        
        return res.status(200).json({ message: 'Success', result });

    } catch (error) {
        await Log('Backend', 'ERROR', 'vehicleController', `Failed to generate schedule: ${error.message}`);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { handleMaintenanceSchedule };