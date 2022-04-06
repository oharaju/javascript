function contar() {
  let inicio = document.querySelector('input.inicio')
  let fim = document.querySelector('input.fim')
  let passo = document.querySelector('input.passo')
  let saida = document.querySelector('p.resultado')


  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert ('Impossível contar!')
  } else {
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    for (let c = i; i <= f; i+=p ) {
      saida.innerHTML += `${c}`

    }

  }

}
