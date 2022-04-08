function calcular() {
  let numero = Number(document.querySelector('input.entrada').value)
  let saida = document.querySelector('div.resposta')

  saida.innerHTML = `<h3>Tabuada de ${numero}</h3>`

  for (let c = 1; c <= 10; c++) {
    saida.innerHTML += `<div>${numero} x ${c} = <strong>${numero * c}`
  }
}

/* USANDO WHILE
let c = 1
while (c <= 10) {
  saida.innerHTML += `<div> ${numero} x ${c} = <strong>${numero * c} </strong></div>`
  c ++
}
*/