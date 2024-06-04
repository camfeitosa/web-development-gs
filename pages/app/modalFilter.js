document.getElementById('filterIcon').addEventListener('click', function(event) {
  const nav = document.querySelector('.nav');
  nav.classList.toggle('hidden');
  event.stopPropagation();
});

document.addEventListener('click', function(event) {
  const nav = document.querySelector('.nav');
  const isClickInside = nav.contains(event.target) || event.target.id === 'filterIcon';

  if (!isClickInside) {
    nav.classList.add('hidden');
  }
});