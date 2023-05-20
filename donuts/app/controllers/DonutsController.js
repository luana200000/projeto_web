/*
Curso: Engenharia de Software - UniEVANGÉLICA
Disciplina: Programação Web 
Dev: Luana Teixeira de Moraes - 2110867
Data: 20/05/2023
*/

const { Donuts, Item } = require('../models');

class DonutsController {

  // Método para buscar todos os donuts
  async findAll(req, res) {
    const donuts = await donuts.findAll({ include: { model: Item, as: 'items' } });
    res.json(donuts);
  }

  // Método para criar um novo donuts
  async create(req, res) {
    const donuts = await Donuts.create(req.body);
    res.status(201).json(donuts);
  }

  // Método para buscar um donuts pelo ID
  async findById(req, res) {
    const donuts = await Donuts.findByPk(req.params.id, { include: { model: Item, as: 'items' } });
    if (!donuts) {
      return res.status(404).json({ error: 'Donuts not found' });
    }
    res.json(donuts);
  }

  // Método para atualizar um donuts
  async update(req, res) {
    const [updated] = await Donuts.update(req.body, { where: { id: req.params.id } });
    if (!updated) {
      return res.status(404).json({ error: 'Donuts not found' });
    }
    const donuts = await Donuts.findByPk(req.params.id);
    res.json(donuts);
  }

  // Método para excluir um donuts
  async delete(req, res) {
    const deleted = await Donuts.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      return res.status(404).json({ error: 'Donuts not found' });
    }
    res.status(204).json();
  }
}

module.exports = DonutsController;

