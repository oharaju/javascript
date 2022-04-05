function contar(){
  var inicio = document.querySelector('input.inicio')
  var fim = document.querySelector('input.fim')
  var passo = document.querySelector('input.passo')
  var resultado = document.querySelector('p.resultado')
  resultado.innerHTML = `${resultado}`

  while ((inicio + passo) * fim) {
    resultado.innerHTML= `${resultado}`

    console.log('resultado')
  }

  resultado.innerHTML = `${resultado}`

}
