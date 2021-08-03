var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número de 0 a 10"))

  if (numeroSecreto == chute) {
    alert("ACERTOU!!")
    break
  } else if (chute > numeroSecreto) {
    alert("Número secreto é menor que o seu chute!")
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert("Número secreto é maior que o seu chute!")
    tentativas = tentativas - 1
  } 
}

if (chute != numeroSecreto) {
    alert("Você perdeu! O número secreto era: " + numeroSecreto)
}