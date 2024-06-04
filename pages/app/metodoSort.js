let btnOrdenarPorTitulo = document.getElementById('btnOrdenarPorTitulo')

btnOrdenarPorTitulo.addEventListener('click', btnOrdenarPorTitulo)

function btnOrdenarPorTitulo(){
  let VideosOrdenados = videos.sort((a, b)=> a.preco - b.preco)
  exibirOsLivrosNaTela(VideosOrdenados)
}

