require('dotenv').config();

const express = require('express');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();


app.use(express.json());

app.use('/api', vehicleRoutes);

app.listen(3000, function() {
    console.log('Server running on port : 3000');
});