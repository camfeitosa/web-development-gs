
document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = getUsers();

    const validarUser = users.find(user => user.email === email && user.password === password);

    if (validarUser) {
        localStorage.setItem('loggedInUser', email);
        window.location.href = 'pages/index.html';
    } else {
        alert('Email ou senha incorretos');
    }
});