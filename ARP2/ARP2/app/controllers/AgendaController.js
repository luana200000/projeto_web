/*
Curso: Engenharia de Software - UniEVANGÉLICA
Disciplina: Programaçao Web 
Dev: Luana Teixeira de Moraes - 2110867
Data: 20/05/2023
*/

const { agenda } = require('../models');

class AgendaController {
  constructor() {
    // Inicialize as propriedades da classe, se necessário
  }

  // Retorna todas as agendas
  async findAll(req, res) {
    try {
      const agendas = await Agenda.findAll();
      res.status(200).json(agendas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Retorna uma agenda com base no ID fornecido
  async findById(req, res) {
    try {
      const id = req.params.id;
      const agenda = await Agenda.findByPk(id);

      if (agenda) {
        res.status(200).json(agenda);
      } else {
        res.status(404).json({ error: 'Agenda not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Cria uma nova agenda
  async create(req, res) {
    try {
      const newAgenda = await Agenda.create(req.body);
      res.status(201).json(newAgenda);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Atualiza uma agenda com base no ID fornecido
  async update(req, res) {
    try {
      const id = req.params.id;
      const [updatedRows] = await Agenda.update(req.body, {
        where: { id },
      });

      if (updatedRows) {
        res.status(200).json({ message: 'Agenda updated successfully' });
      } else {
        res.status(404).json({ error: 'Agenda not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Deleta uma agenda com base no ID fornecido
  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedRows = await Agenda.destroy({
        where: { id },
      });

      if (deletedRows) {
        res.status(200).json({ message: 'Agenda deleted successfully' });
      } else {
        res.status(404).json({ error: 'Agenda not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = AgendaController;
