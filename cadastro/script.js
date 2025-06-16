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
    local: local,
    // senha: senha
  };

  console.log("Enviando os dados:", dados);

  fetch('https://neptune-rmlz.onrender.com/pessoa', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(async response => {
    if (!response.ok) {
      throw new Error('Erro ao enviar os dados. Código: ' + response.status);
    }

    // Tenta ler como texto (pode estar vazio)
    const text = await response.text();
    if (text) {
      try {
        const data = JSON.parse(text);
        console.log("Resposta da API:", data);
      } catch (e) {
        console.log("Resposta não era JSON válido:", text);
      }
    } else {
      console.log("Resposta vazia, mas sucesso confirmado");
    }

    // ✅ Redireciona após sucesso
    window.location.href = "/index.html";
  })
  .catch(error => {
    mensagem.style.color = 'red';
    mensagem.textContent = 'Erro: ' + error.message;
    console.error("Erro ao enviar dados:", error);
  });
});
