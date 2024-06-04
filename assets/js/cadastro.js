function verificarSenha(){  
    const senha = document.getElementById('senha').value
    const confirmeSenha = document.getElementById('confirme-senha').value
    
    if (senha != confirmeSenha){
        alert('Senhas diferentes')
    }
}

