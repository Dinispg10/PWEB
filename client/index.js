fetch('http://localhost:3000/api/cliente')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('dados-cliente');

    const html = `
      <p><strong>Nome:</strong> ${data.nome}</p>
      <p><strong>Endereço:</strong> ${data.endereco.rua}, ${data.endereco.numero}, ${data.endereco.cidade} - ${data.endereco.codigoPostal}</p>
      <p><strong>Consumo (${data.consumo[0].mes}/${data.consumo[0].ano}):</strong> ${data.consumo[0].kWhConsumido} kWh, €${data.consumo[0].custoTotal}</p>
      <p><strong>Leitura:</strong> ${data.consumo[0].dataLeitura}</p>
      <p><strong>Tarifa:</strong> ${data.informacoesAdicionais.tipoTarifa}</p>
      <p><strong>Fornecedor:</strong> ${data.informacoesAdicionais.fornecedorEnergia}</p>
      <p><strong>Contrato Ativo:</strong> ${data.informacoesAdicionais.contratoAtivo ? 'Sim' : 'Não'}</p>
    `;

    container.innerHTML = html;
  })
  .catch(error => {
    console.error('Erro ao carregar dados:', error);
  });
