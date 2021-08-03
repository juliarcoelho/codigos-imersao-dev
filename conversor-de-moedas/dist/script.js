var valorEmDolarString = prompt("Qual o valor em dólar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarString)

var valorEmReal = valorEmDolarNumero * 5.49;

var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)

//alert