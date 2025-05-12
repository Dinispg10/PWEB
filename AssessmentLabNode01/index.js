const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // Para permitir JSON no body das requisições

let minhas_notas = [20, 10, 15, 17];

app.use((req, res, next) => {
  console.log(`Recebida requisição: ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  next();
});


// a. GET - Listar todas as notas
app.get("/", (req, res) => {
  res.status(200).json(minhas_notas);
});

// b. GET - Retornar nota específica
app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < minhas_notas.length) {
    res.status(200).json({ nota: minhas_notas[id] });
  } else {
    res.status(400).json({ erro: "Índice inválido" });
  }
});

// c. POST - Adicionar uma nota (body)
app.post("/", (req, res) => {
  const nota = parseInt(req.body.nota);
  if (!isNaN(nota)) {
    minhas_notas.push(nota);
    res.status(200).json({ sucesso: "Nota adicionada", notas: minhas_notas });
  } else {
    res.status(400).json({ erro: "Nota inválida" });
  }
});

// d. POST - Adicionar uma nota (parâmetro)
app.post("/:nota", (req, res) => {
  const nota = parseInt(req.params.nota);
  if (!isNaN(nota)) {
    minhas_notas.push(nota);
    res.status(200).json({ sucesso: "Nota adicionada", notas: minhas_notas });
  } else {
    res.status(400).json({ erro: "Nota inválida" });
  }
});

// e. PATCH - Atualizar uma nota
app.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const novaNota = parseInt(req.body.nota);
  if (id >= 0 && id < minhas_notas.length && !isNaN(novaNota)) {
    minhas_notas[id] = novaNota;
    res.status(200).json({ sucesso: "Nota atualizada", notas: minhas_notas });
  } else {
    res.status(400).json({ erro: "Erro ao atualizar nota" });
  }
});

// f. DELETE - Remover uma nota específica
app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < minhas_notas.length) {
    minhas_notas.splice(id, 1);
    res.status(200).json({ sucesso: "Nota removida", notas: minhas_notas });
  } else {
    res.status(400).json({ erro: "Índice inválido" });
  }
});

// g. DELETE - Remover todas as notas
app.delete("/", (req, res) => {
  minhas_notas = [];
  res.status(200).json({ sucesso: "Todas as notas foram removidas" });
});

app.listen(PORT, () => {
  console.log(` Site do meu mano Diogo Baltazar http://localhost:${PORT}`);
});