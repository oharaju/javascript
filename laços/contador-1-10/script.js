function contar(){
    let resposta = document.querySelector('p.resposta')
    resposta.innerHTML += `<h2>Fazendo a Contagem e Marcando os Pares</h2>`

    let numero = 1

    while (numero <= 10) {
        if (numero % 2 == 0) { //2 se for par
            resposta.innerHTML += `<mark><strong> ${numero} </strong></mark>\u{1F449}`
        } else {
            resposta.innerHTML += ` ${numero}  \u{1F449}`
        }
        numero++
    }
    resposta.innerHTML += `\u{1F3C1}`
}