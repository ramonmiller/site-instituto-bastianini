document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
  
    if (!nome || !senha) {
      mensagem.textContent = 'Preencha todos os campos.';
      mensagem.style.color = 'red';
      return;
    }
  
    // Simulação de verificação (não é seguro — apenas ilustrativo)
    fetch(`https://neptune-rmlz.onrender.com/pessoa`)
      .then(response => response.json())
      .then(pessoas => {
        const pessoa = pessoas.find(p => p.nome === nome /* && p.senha === senha */);
  
        if (pessoa) {
          mensagem.style.color = 'green';
          mensagem.textContent = 'Login bem-sucedido!';
          // Redireciona para página principal
          setTimeout(() => {
            window.location.href = "/index.html";
          }, 1000);
        } else {
          mensagem.style.color = 'red';
          mensagem.textContent = 'Nome ou senha inválidos.';
        }
      })
      .catch(error => {
        mensagem.style.color = 'red';
        mensagem.textContent = 'Erro ao verificar login.';
        console.error(error);
      });
  });
