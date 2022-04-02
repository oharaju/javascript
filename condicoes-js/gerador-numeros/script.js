function gerar() {
  const resposta= document.querySelector('div.resultado')
  const gerador = Math.floor(100* Math.random() + 1) //Math.floor gera número inteiro, é multiplicado por 100 que é o que quero (de 1 a 100)
  //Math.random é o gerador
  // +1 pois eu quero que conte 1 e 100
  resposta.innerHTML = `Acabei de pensar no número ${gerador}`
}

function limpar() {
  const resposta = document.querySelector('div.resultado')
  resposta.innerHTML = null
}