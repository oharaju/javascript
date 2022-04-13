let num = [4, 2, 8, 6, 10]

num.push(20) //ADICIONANDO 20 A LISTA

num.sort(function (a, b) { //Define a ordem (Alfabética) crescente, baseada na tabela Unicode
    return a - b; })
//OU num.sort((a , b) => a - b)

console.log(num) // VERIFICA A LISTA

let keys = num.indexOf(8) // Qual o indice do valor 8


if (keys == -1) {
    console.log('O valor não foi encontrado')

} else {
    console.log(`O valor ${num[keys]} está na posição ${keys}`)
}


/* USANDO FOR IN
for (let keys in num) {
    console.log(`A posição ${keys} tem o valor ${num[keys]}`)
}

USANDO FOR
for (let keys = 0; keys < num.length; keys++) {
    console.log(`A posição ${keys} tem o valor ${num[keys]}`)
}


QUAL É O VALOR DA CHAVE
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
*/