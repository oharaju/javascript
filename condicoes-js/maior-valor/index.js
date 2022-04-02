function calcular() {
  const resultado = document.querySelector('p.resultado')
  const n1 = Number(window.prompt('Digite um número:'))
  const n2 = Number(window.prompt('Digite outro número:'))

  if (n1 > n2) {
    resultado.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior é <strong>${n1}</strong>`

  } else if (n1 < n2) {
    resultado.innerHTML = `Analisando os valores ${n1} e ${n2}, o maior valor é <strong>${n2}</strong>`

  } else {
    resultado.innerHTML = `Analisando os valores ${n1} e ${n2}, ambos valores são <strong>Iguais</strong>  `
  }
}