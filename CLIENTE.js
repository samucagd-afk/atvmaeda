const express = require('express');
const router = express.Router();

let customers = []; // Renomeando 'clientes' para 'customers'

router.get('/', (req, res) => {
    res.status(200).json(customers); // Status 200 explícito
});

router.post('/', (req, res) => {
    const newCustomer = req.body;

    // Validação simples: verifica se o cliente tem 'id' e 'nome'
    if (!newCustomer.id || !newCustomer.name) {
        return res.status(400).json({ message: 'Campos obrigatórios: id e nome.' });
    }

    customers.push(newCustomer);
    res.status(201).json({ message: 'Cliente criado com sucesso!', customer: newCustomer });
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedCustomer = req.body;

    // Verifica se o cliente existe
    const index = customers.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

    customers[index] = { ...customers[index], ...updatedCustomer }; // Atualizando cliente
    res.status(200).json({ message: 'Cliente atualizado com sucesso!', updatedCustomer });
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // Verifica se o cliente existe
    const index = customers.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Cliente não encontrado.' });
    }

    customers.splice(index, 1); // Remove o cliente pelo índice
    res.status(200).json({ message: 'Cliente removido com sucesso!' });
});

module.exports = router;