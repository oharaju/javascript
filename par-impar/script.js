function clicar() {
  const resultado = document.querySelector('p.resultado')
  const usuario = Number(window.prompt('Digite um número:'))

  if (usuario % 2 == 0) {
    resultado.innerHTML = `O número ${usuario} que foi digitado é PAR`

  } else {
    resultado.innerHTML = `O número ${usuario} que foi digitado é IMPAR`
  }
}