const express = require('express');
const router = express.Router();

const cliente = {
  clienteId: "52229",
  nome: "Dinis Gonçalves",
  endereco: {
    rua: "Avenida da Serra",
    numero: "57",
    cidade: "Vila Velha",
    codigoPostal: "6030-202"
  },
  consumo: [
    {
      mes: "Janeiro",
      ano: 2023,
      kWhConsumido: 250,
      custoTotal: 35.50,
      dataLeitura: "2023-01-31"
    }
  ],
  informacoesAdicionais: {
    tipoTarifa: "Residencial",
    fornecedorEnergia: "Empresa XYZ",
    contratoAtivo: true
  }
};

router.get('/', (req, res) => {
  res.status(200).json(cliente);
});

module.exports = router;
