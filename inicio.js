// Pega os botões pelo id
const btnCatador = document.getElementById('entrarcat');
const btnPJ = document.getElementById('entrarpj');
const btnPF = document.getElementById('entrarpf');

// Função para interceptar o submit e redirecionar
function redirecionar(event, destino) {
  event.preventDefault(); // Evita o reload
  window.location.href = destino;
}

// Adiciona eventos
btnCatador.addEventListener('click', (e) => redirecionar(e, 'logincpf_t2.html'));
btnPJ.addEventListener('click', (e) => redirecionar(e, 'logincnpj_t18.html'));
btnPF.addEventListener('click', (e) => redirecionar(e, 'loginpf_t35.html'));
