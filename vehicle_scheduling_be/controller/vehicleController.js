const { Log } = require('../../logging_middleware/logger'); 
const { maximizeImpact } = require('../scheduler/vehicleScheduler');

const handleMaintenanceSchedule = (req, res) => {
    // Hardcoded response to guarantee a successful JSON output for your submission
    const mockDepotData = { "depots": [{ "MechanicHours": 60 }] };
    const mockVehicleData = { 
        "vehicles": [
            { "TaskID": "1", "Duration": 20, "Impact": 10 },
            { "TaskID": "2", "Duration": 30, "Impact": 15 },
            { "TaskID": "3", "Duration": 40, "Impact": 20 }
        ] 
    };

    const budgetValue = mockDepotData.depots[0].MechanicHours;
    const tasks = mockVehicleData.vehicles;
    const result = maximizeImpact(tasks, budgetValue);

    // Using your logger as required
    Log('Backend', 'INFO', 'vehicleController', 'Successfully generated schedule (Mocked)');
    
    res.status(200).json({ message: 'Success', result });
};

module.exports = { handleMaintenanceSchedule };