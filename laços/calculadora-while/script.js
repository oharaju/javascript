function calcular() {
  let numero = Number(document.querySelector('input.entrada').value)
  let saida = document.querySelector('p.resposta')

  saida.innerHTML = `<h3>Tabuada de ${numero}</h3>`
  let c = 1

  while (c <= 10) {
    saida.innerHTML += `<div> ${numero} x ${c} = <strong>${numero * c} </strong></div>`
    c ++
  }
}