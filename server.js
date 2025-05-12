const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const clienteRouter = require('./routes/clienteRouter');
const notasRouter = require('./routes/notasRouter');

const app = express();
const PORT = 3000;


app.use(express.json());


app.use(cors());


app.use((req, res, next) => {
  const dataHora = new Date().toLocaleString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next();
});


mongoose.connect('mongodb+srv://dinispg05:Didipg05@labnode02.z82farp.mongodb.net/?retryWrites=true&w=majority&appName=LabNODE02')
  .then(() => console.log('✅ Ligado ao MongoDB Atlas!'))
  .catch((err) => console.error('❌ Erro ao ligar ao MongoDB:', err.message));

app.use('/api/cliente', clienteRouter);
app.use('/api/notas', notasRouter);



app.listen(PORT, () => {
  console.log(`🚀 Servidor a correr em http://localhost:${PORT}`);
});
