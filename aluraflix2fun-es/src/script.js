function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if(filmeFavorito.endsWith('.jpg')){
    listarFilmesnaTela(filmeFavorito)
  } else {
    alert("Imagem inválida")
  }
 campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme){
  var listaFilmes = documet.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}