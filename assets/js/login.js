const wrongLogin = document.getElementById('wrong-login')

document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = getUsers();

    const validarUser = users.find(user => user.email === email && user.password === password);

    if (validarUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(validarUser));
        window.location.href = '../../pages/index.html';
    } else {
        wrongLogin.innerHTML = `E-mail ou senha errados`
    }
});


function togglePasswordLog(){
    const togglePassword = document.getElementById('togglePassword')
    const password = document.getElementById('password')
    
    togglePassword.addEventListener('click', function (){
        const type = password.type === "password" ? "text" : "password"
        password.type = type;
        
    })
}
togglePasswordLog()