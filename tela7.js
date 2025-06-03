document.getElementById('redefinir-senha-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;

  if (!email) {
    alert('Por favor, preencha o e-mail.');
    return;
  }

  try {
    const response = await fetch('/api/redefinir-senha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const result = await response.json();
    if (response.ok) {
      alert('Instruções de redefinição enviadas para o seu e-mail.');
    } else {
      alert(result.mensagem || 'Erro ao solicitar redefinição.');
    }
  } catch (err) {
    alert('Erro ao conectar com o servidor.');
  }
});
