window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/api/usuarios/perfil', {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    });

    const perfil = await response.json();
    if (response.ok) {
      document.getElementById('nome').value = perfil.nome;
      document.getElementById('email').value = perfil.email;
      document.getElementById('tipo').value = perfil.tipo;
    } else {
      alert(perfil.mensagem || 'Erro ao carregar perfil.');
    }
  } catch (err) {
    alert('Erro ao conectar com o servidor.');
  }
});

document.getElementById('perfil-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  try {
    const response = await fetch('/api/usuarios/perfil', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({ nome, email })
    });

    const result = await response.json();
    if (response.ok) {
      alert('Perfil atualizado com sucesso!');
    } else {
      alert(result.mensagem || 'Erro ao atualizar perfil.');
    }
  } catch (err) {
    alert('Erro ao conectar com o servidor.');
  }
});
