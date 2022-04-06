function contar() {
  let inicio = document.querySelector('input.inicio')
  let fim = document.querySelector('input.fim')
  let passo = document.querySelector('input.passo')
  let saida = document.querySelector('p.resultado')


  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert ('Falta dados')

  } else {
    saida.innerHTML = 'Contando: '
    let i = Number(inicio.value) //Converte p número
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
      window.alert(`Passo inválido!`)
      p = 1 //Passo vira 1, ao invés de 0
    }

    if (i < f) { //Contagem crescente
      for (let c = i; c <= f; c += p) {
        saida.innerHTML += `${c} \u{1F449} ` //Adiciona emoji
      }

    } else { //Contagem decrescente
      for (let c = i; c >= f; c -= p) {
        saida.innerHTML += `${c} \u{1F449} `
      }
    }
  } saida.innerHTML += `\u{1F3C1} ` //Emoji de bandeira no final da expressão
}
