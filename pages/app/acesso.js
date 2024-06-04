const currentPath = window.location.pathname;
if (currentPath.includes('index.html') && !localStorage.getItem('loggedInUser')) {
  window.location.href = '../index.html';
}