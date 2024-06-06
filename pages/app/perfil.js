document.addEventListener('DOMContentLoaded', function () {
    const dados = localStorage.getItem("loggedInUser");
    const dadosLogin = JSON.parse(dados);

    document.getElementById("edit-profile-username").value = dadosLogin.username;
    document.getElementById("edit-profile-email").value = dadosLogin.email;
    document.getElementById("edit-profile-password").value = dadosLogin.password;

    document.getElementById("edit-profile-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const newUsername = document.getElementById("edit-profile-username").value;
        const newEmail = document.getElementById("edit-profile-email").value;
        const newPassword = document.getElementById("edit-profile-password").value;

        dadosLogin.username = newUsername;
        dadosLogin.email = newEmail;
        dadosLogin.password = newPassword;

        localStorage.setItem("loggedInUser", JSON.stringify(dadosLogin));

        alert("Perfil atualizado com sucesso!");

        window.location.reload();
    });
});

function togglePasswordEdit(){
    const togglePassword4 = document.getElementById('togglePassword4')
    const password4 = document.getElementById('edit-profile-password')
    
    togglePassword4.addEventListener('click', function (){
        const type = password4.type === "password" ? "text" : "password"
        password4.type = type;
        
    })
}
togglePasswordEdit()
