const btnEntrar = document.getElementById('entrar');

btnEntrar.addEventListener('click', function(event) {
    event.preventDefault();  // Evita reload
    const cpf = document.getElementById('cpf').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (cpf === '' || senha === '') {
        alert('Por favor, preencha CPF e Senha.');
        return;
    }

    // Aqui faria validação com backend (futuramente)

    // Simula sucesso de login
    window.location.href = 'menucpf_t3.html';
});
