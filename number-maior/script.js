function analisar() {
    const n1 = Number(document.querySelector('input.n1').value)
    const n2 = Number(document.querySelector('input.n2').value)
    const n3 = Number(document.querySelector('input.n3').value)
    const resultado = document.querySelector('p.saida')

    resultado.innerHTML += `Entre os números ${n1} , ${n2} e ${n3} `
    resultado.style.color = 'green'

    if ((n1 > n2) && (n1 > n3)) {
        resultado.innerHTML += `<p>${n1} é o MAIOR número</p> `

    } else if ((n2 > n1) && (n2 > n3)) {
        resultado.innerHTML += `<p>${n2} é o MAIOR número</p>`

    } else if ((n3 > n2) && (n3 > n1)) {
        resultado.innerHTML += `<p>${n3} é o MAIOR número</p>`

    }else {
        resultado.innerHTML = `<p>Todos os números são iguais!`
    }
}

/*
Corrigir erro (ex: n1-2 , n2-1 , n3-2 = todos iguais)
https://pt.stackoverflow.com/questions/83292/mostrar-o-maior-e-o-menor-n%C3%BAmero
*/