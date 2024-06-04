function logar(){
    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value

    if(email == 'admin@gmail.com' && senha == 'admin'){
        alert('logado!')
    } else{
        alert('nao logado!')
    }
}

