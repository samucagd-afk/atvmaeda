const express = require('express');
const routes = express.Router();

let vehicles = [];

routes.get('/vehicles', (req, res) => {
    res.status(200).json({ vehicles });
});

routes.post('/vehicles', (req, res) => {
    const newVehicle = req.body;
    vehicles.push(newVehicle);
    res.status(201).json({
        message: 'Vehicle adicionado com sucesso!',
        vehicle: newVehicle
    });
});

routes.put('/vehicles/:id', (req, res) => {
    const { id } = req.params;
    const updatedVehicle = req.body;
    vehicles = vehicles.map(vehicle => vehicle.id === id ? updatedVehicle : vehicle);
    res.status(200).json({
        message: 'Vehicle atualizado com sucesso!',
        updatedVehicle
    });
});

routes.delete('/vehicles/:id', (req, res) => {
    const { id } = req.params;
    vehicles = vehicles.filter(vehicle => vehicle.id !== id);
    res.status(200).json({
        message: 'Vehicle removido com sucesso!'
    });
});

module.exports = routes;