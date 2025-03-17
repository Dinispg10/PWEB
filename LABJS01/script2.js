// 4. Alterar o texto do h1 para "Olá, mundo!" quando a página for carregada
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("titulo").textContent = "Olá, mundo!";
});

// 5. Adicionar um event handler ao botão para mudar o texto do h1 para "Botão clicado!"
document.getElementById("botao").addEventListener("click", function () {
  document.getElementById("titulo").textContent = "Botão clicado!";
  document.getElementById("titulo").style.backgroundColor = "red"; 
});

// 6. Capturar valor do campo de texto e exibir na console ao pressionar Enter
document.getElementById("campoTexto").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
      console.log("Texto digitado:", event.target.value);
  }
});

// 7. Remover um item da lista quando for clicado
document.querySelectorAll("#lista li").forEach(function (item) {
  item.addEventListener("click", function () {
      item.remove();
  });
});