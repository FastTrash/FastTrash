function interceptaNavegacao(idBotao, destino) {
    const botao = document.getElementById(idBotao);
    botao.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = destino;
    });
}

interceptaNavegacao('menu', 'menucpf_t3.html');
interceptaNavegacao('atv', 'atvcpf_t9.html');
interceptaNavegacao('config', 'cfgcpf_t?.html');
