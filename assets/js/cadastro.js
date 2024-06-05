function verificarSenha() {
    const form = document.getElementById('form')
    const senha = document.getElementById('senha').value
    const confirmeSenha = document.getElementById('confirme-senha').value
    const inputDeSenha = document.getElementById('password-box')
    const senhaIncorretaTexto = document.getElementById('wrong-password-text')

    if (senha != confirmeSenha) {
        inputDeSenha.classList.add('wrong-password')
        senhaIncorretaTexto.innerHTML = `<p class="wrong-password-text">Senhas diferentes</p>`
        form.addEventListener('submit', function (evento) {
            evento.preventDefault();
        });
    }
}

// Cadastro

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('nomeCadastro').value;
    const email = document.getElementById('emailCadastro').value;
    const password = document.getElementById('senha').value;
    const userCadastrado = document.getElementById('cadastrado')


    let users = getUsers();

    const userExists = users.some(user => user.email === email);

    if (userExists) {
        userCadastrado.innerHTML = `<p class="cadastrado color">Usuário já cadastrado</p>`
    } else {
        users.push({ username, email, password });
        saveUsers(users);
        userCadastrado.innerHTML = `<p class="cadastrado color2">Cadastro realizado com sucesso!</p>`
        console.log(users)

        setTimeout(()=>{
            window.location.href = '/login.html'
        }, 2000)
    }
});



