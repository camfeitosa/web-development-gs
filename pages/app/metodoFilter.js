const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarVideos));

function filtrarVideos(){
  const categoria = this.value;

  let videosFiltrados;
  if (categoria) {
    videosFiltrados = videos.filter(video => video.categoria == categoria);
  } else {
    videosFiltrados = videos;
  }
    
  exibirOsVideosNaTela(videosFiltrados);
}

document.addEventListener('DOMContentLoaded', function() {
  exibirOsVideosNaTela(videos);
});
