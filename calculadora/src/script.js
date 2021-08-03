var primeiroValor = parseInt(prompt("Digite o primeiro valor:"));
var segundoValor = parseInt(prompt("Digite o segundo valor:"));

function pulaLinha() {
		document.write("<br>");
	}

var operação = prompt("Digite 1 para fazer uma divisão. Digite 2 para fazer uma multiplicaçãO. Digite 3 para fazer uma soma. Digite 4 para fazer uma subtração")

if (operação == 1) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else if (operação == 2) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " X " + segundoValor + " = " + resultado + "</h2>")
} else if (operação == 3) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
  } else if (operação == 4) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
  } else {
    document.write("<h2> OPÇÃO INVÁLIDA </h2>");
  }