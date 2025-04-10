const express = require("express");
const router = express.Router();
const db = require("../db");

// GET - listar todos
router.get("/", (req, res) => {
  db.query("SELECT * FROM people", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// GET - Buscar pessoa por ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM people WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ error: "Pessoa não encontrada" });
    res.json(results[0]); // Retorna apenas o objeto da pessoa
  });
});


// POST - Criar novo pessoa
router.post('/', (req, res) => {
  const { name, yearBirth, address, gender, cpf } = req.body;
  db.query(
    'INSERT INTO people (name, yearBirth, address, gender, cpf) VALUES (?, ?, ?, ?, ?)',
    [name, yearBirth, address, gender, cpf],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, name, yearBirth, address, gender, cpf });
    }
  );
});

// PUT - Atualizar pessoa
router.put('/:id', (req, res) => {
  const { name, yearBirth, address, gender, cpf } = req.body;
  db.query(
    'UPDATE people SET name = ?, yearBirth = ?, address = ?, gender = ?, cpf = ? WHERE id = ?',
    [name, yearBirth, address, gender, cpf, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: req.params.id, name, yearBirth, address, gender, cpf });
    }
  );
});

// DELETE - remover pessoa
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM people WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.sendStatus(204);
  });
});

module.exports = router;
