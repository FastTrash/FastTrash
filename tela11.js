window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/api/favoritos', {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    });

    const favoritos = await response.json();
    const lista = document.getElementById('lista-favoritos');
    lista.innerHTML = '';

    if (favoritos.length === 0) {
      lista.innerHTML = '<li>Nenhum favorito encontrado.</li>';
    } else {
      favoritos.forEach(fav => {
        const li = document.createElement('li');
        li.textContent = `${fav.nomeEmpresa} - ${fav.tipoMaterial}`;
        lista.appendChild(li);
      });
    }
  } catch (err) {
    alert('Erro ao carregar favoritos.');
  }
});
