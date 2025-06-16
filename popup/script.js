document.querySelectorAll('.evento').forEach(evento => {
  evento.addEventListener('click', () => {
    const nomeEvento = evento.getAttribute('data-nome');
    const horario = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    document.getElementById('instrucao').innerText = `${horario} — você está na etapa de inscrição. Leia atentamente:`;
    document.getElementById('codigoAtivacao').innerText = `ativar inscrição ${nomeEvento}`;
    
    document.getElementById('popup').style.display = 'flex';
  });
});

document.getElementById('btnFechar').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});

document.getElementById('btnInscrever').addEventListener('click', () => {
  alert("Inscrição iniciada! Agora envie a mensagem no WhatsApp.");
});
