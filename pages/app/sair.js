// Sair
if (document.getElementById('logout')) {
  document.getElementById('logout').addEventListener('click', function() {
      localStorage.removeItem('loggedInUser');
      window.location.href = '../index.html';
  });
}