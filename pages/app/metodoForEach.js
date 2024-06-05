const elementoParaInserirVideos = document.getElementById('videos')

function exibirOsVideosNaTela(listaDeVideos){
  elementoParaInserirVideos.innerHTML =  ''
  listaDeVideos.forEach(video => {

    elementoParaInserirVideos.innerHTML += ` <div class="video">
    <iframe class='video-yt' src="${video.link}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allowfullscreen/> </iframe>

    <h2 class="video__titulo">
     <a href="${video.link}">${video.titulo}</a>
    </h2>

    <p class="video__descricao">${video.canal}</p>

    <div class="tags">
      <span class="tag">${video.categoria}</span>
    </div>
  </div>`
  })
}