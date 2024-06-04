function searchVideos(query) {
  const videos = document.querySelectorAll('.video');
  videos.forEach(video => {
    const titulo = video.querySelector('.video__titulo').textContent.toLowerCase();
    if (titulo.includes(query.toLowerCase())) {
      video.style.display = 'block'; 
    } else {
      video.style.display = 'none'; 
    }
  });
}

document.getElementById('search').addEventListener('click', function() {
  const searchInput = document.getElementById('search-input').value;
  searchVideos(searchInput);
});
