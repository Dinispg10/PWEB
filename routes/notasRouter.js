const express = require('express');
const router = express.Router();
const Nota = require('../models/notas');


// POST 
router.post('/', async (req, res) => {
  try {
    const novaNota = new Nota(req.body);
    await novaNota.save();
    res.status(201).json(novaNota);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao criar nota", detalhes: err.message });
  }
});

// GET 
router.get('/', async (req, res) => {
  try {
    const notas = await Nota.find();
    res.status(200).json(notas);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar notas", detalhes: err.message });
  }
});

// GET 
router.get('/:id', async (req, res) => {
  try {
    const nota = await Nota.findById(req.params.id);
    if (!nota) return res.status(404).json({ erro: "Nota não encontrada" });
    res.status(200).json(nota);
  } catch (err) {
    res.status(400).json({ erro: "ID inválido", detalhes: err.message });
  }
});

// PATCH 
router.patch('/:id', async (req, res) => {
  try {
    const notaAtualizada = await Nota.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!notaAtualizada) {
      return res.status(404).json({ erro: 'Nota não encontrada para atualizar' });
    }

    res.status(200).json(notaAtualizada);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao atualizar nota', detalhes: err.message });
  }
});


// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const notaRemovida = await Nota.findByIdAndDelete(req.params.id);
    if (notaRemovida) {
      res.status(200).json({ mensagem: 'Nota apagada com sucesso' });
    } else {
      res.status(404).json({ erro: 'Nota não encontrada para apagar' });
    }
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

module.exports = router;


