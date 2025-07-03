console.log("O JavaScript foi carregado!");

document.getElementById('formPessoa').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const nascimento = document.getElementById('nascimento').value;
  const local = document.getElementById('local').value;
  const senha = document.getElementById('senha').value;
  const mensagem = document.getElementById('mensagem');

  const dados = {
    nome: nome,
    nascimento: nascimento,
    local: local
  };

  console.log("Enviando os dados:", dados);

  fetch('https://neptune-wq2t.onrender.com/pessoa', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  .then(async response => {
    if (!response.ok) throw new Error('Erro ao enviar os dados. Código: ' + response.status);

    const text = await response.text();
    if (text) {
      const data = JSON.parse(text);
      if (data.id) {
        localStorage.setItem("userId", data.id); // salva ID no navegador

      }
    }

    window.location.href = "/index.html";
  })
  .catch(error => {
    mensagem.style.color = 'red';
    mensagem.textContent = 'Erro: ' + error.message;
    console.error("Erro ao enviar dados:", error);
  });
});
