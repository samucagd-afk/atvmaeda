const express = require('express');

// Instanciando o servidor Express
const server = express();

// Middleware para processar JSON nos requests
server.use(express.json());

// Importando as rotas de clientes e veículos
const clientRoutes = require('./routes/ClientRoutes');
const vehicleRoutes = require('./routes/VehicleRoutes');

// Definindo as rotas principais para cada recurso
server.use('/api/clients', clientRoutes);  // Mudando o nome para 'clients' e prefixando com '/api'
server.use('/api/vehicles', vehicleRoutes); // Fazendo o mesmo para 'vehicles'

// Definindo a porta do servidor
const SERVER_PORT = 8080;

// Iniciando o servidor
server.listen(SERVER_PORT, () => {
    console.log(`Servidor ativo em http://127.0.0.1:${SERVER_PORT}/`);
});