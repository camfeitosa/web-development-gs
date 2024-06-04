function verificarSenha(){  
    const form = document.getElementById('form')
    const senha = document.getElementById('senha').value
    const confirmeSenha = document.getElementById('confirme-senha').value
    const inputDeSenha = document.getElementById('password-box')
    const senhaIncorretaTexto = document.getElementById('wrong-password-text')
    const minimoDeCaracters = document.getElementById('min-characters')
    
    if (senha != confirmeSenha){
        inputDeSenha.classList.add('wrong-password')
        senhaIncorretaTexto.innerHTML = `<p class="wrong-password-text">Senhas diferentes</p>`
        form.addEventListener('submit', function(evento) {
            evento.preventDefault();
        });
   }
}