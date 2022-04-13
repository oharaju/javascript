// FUNÇÃO DE DECLARAÇÃO
function soma (n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(2,5))


// FUNÇÃO DE EXPRESSÃO
let somar = function (n1= 0, n2= 0) {
    console.log(n1 + n2)
}
somar (2,5)