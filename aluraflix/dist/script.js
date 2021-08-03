//var filmes = ["De repente 30", "Um principe em Nova York", "Portrait of a lady on fire", "Esqueceram de mim", "Marley e eu"]

//for  (var i = 0; i < filmes.length; i++) {
 // console.log(filmes[i])
//}

//console.log(filmes[0])
//console.log(filmes[1])
//console.log(filmes[2])

//console.log(filmes.length)

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjE1NzI5NTkwMF5BMl5BanBnXkFtZTYwOTA4NzY2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
}