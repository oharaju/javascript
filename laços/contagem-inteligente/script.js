function contar() {
    let valorInicial = Number(document.querySelector('input.inicio').value)
    let valorFinal = Number(document.querySelector('input.final').value)
    let saida = document.querySelector('p.saida')

    saida.innerHTML += `<h3>Contando de ${valorInicial} até ${valorFinal}</h3>`


    if (valorInicial < valorFinal) { //CONTAGEM CRESCENTE

        //"let numero = valorInicial" Criei p dizer que numero é igual a 'valorInicial', e conseguir usar o loop

       for (let numero = valorInicial; numero <= valorFinal; numero ++) {
           saida.innerHTML += `${numero} `
        }

    } else if (valorFinal < valorInicial) { //CONTAGEM DECRESCENTE

        for (let numero = valorInicial; numero >= valorFinal; numero --) {
            saida.innerHTML += `${numero} `
        }

    } else {
        saida.innerHTML += `Não é possível contar, pois os números são iguais`
    }
}