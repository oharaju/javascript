let contador = 0
let resultado= document.querySelector('p.resultado')
//As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro


function contar() {
    contador ++ // É a mesma coisa que contador = contador + 1
    resultado.innerHTML = `<p>O contador está com ${contador} cliques.</p>`
}

function zerar() {
    contador = 0
    resultado.innerHTML =  null

}