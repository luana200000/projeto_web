/*
Curso: Engenharia de Software - UniEVANGÉLICA
Disciplina: Programaçao Web 
Dev: Luana Teixeira de Moraes - 2110867
Data: 20/05/2023
*/

const { caradpio } = require('../models');

class CardapioController {
  constructor() {
    // Inicialize as propriedades da classe, se necessário
  }

  // Retorna todos os cardapios
  async findAll(req, res) {
    try {
      const cardapio = await Cardapio.findAll();
      res.status(200).json(cardapios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Retorna um cardapio com base no ID fornecido
  async findById(req, res) {
    try {
      const id = req.params.id;
      const cardapio = await Cardapio.findByPk(id);

      if (cardapio) {
        res.status(200).json(cardapio);
      } else {
        res.status(404).json({ error: 'Cardapio not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Cria um novo cardapio
  async create(req, res) {
    try {
      const newCardapio = await Cardapio.create(req.body);
      res.status(201).json(newCardapio);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Atualiza uma cardapio com base no ID fornecido
  async update(req, res) {
    try {
      const id = req.params.id;
      const [updatedRows] = await Cardapio.update(req.body, {
        where: { id },
      });

      if (updatedRows) {
        res.status(200).json({ message: 'Cardapio updated successfully' });
      } else {
        res.status(404).json({ error: 'Cardapio not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Deleta um cardapio com base no ID fornecido
  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedRows = await Cardapio.destroy({
        where: { id },
      });

      if (deletedRows) {
        res.status(200).json({ message: 'Cardapio deleted successfully' });
      } else {
        res.status(404).json({ error: 'Cardapio not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = CardapioController;
