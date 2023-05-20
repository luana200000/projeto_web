/*
Curso: Engenharia de Software - UniEVANGÉLICA
Disciplina: Programação Web 
Dev: Luana Teixeira de Moraes - 2110867
Data: 15/05/2023
*/

// Express Framework
const express = require('express');
const app = express();

// Import Controllers
const CardapioController = require('./app/controllers/DonutsController');
const caradapioController = new CardapioController();

// Define json
app.use(express.json());

// Routes
app.get('/', function(req, res) {
  res.send('Bem-vindo!');
});

// Pacientes
app.get('/cardapio', (req, res) => cardapioController.findAll(req, res));
app.post('/cardapio', (req, res) => cardapioController.create(req, res));
app.get('/cardapio/:id', (req, res) => cardapioController.findById(req, res));
app.put('/cardapio/:id', (req, res) => caradpioController.update(req, res));
