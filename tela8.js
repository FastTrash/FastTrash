document.getElementById('cadastro-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const tipo = document.getElementById('tipo').value;

  if (!nome || !email || !senha || !tipo) {
    alert('Preencha todos os campos.');
    return;
  }

  try {
    const response = await fetch('/api/usuarios/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha, tipo })
    });

    const result = await response.json();
    if (response.ok) {
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'login.html';
    } else {
      alert(result.mensagem || 'Erro no cadastro.');
    }
  } catch (err) {
    alert('Erro de conexão com o servidor.');
  }
});
