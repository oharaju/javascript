//Criar uma função que recebe dois parâmetros e faz uma soma entre eles, retornando o valor da soma.

function somar(n1, n2) {
    return (n1 + n2)
}

console.log(somar(2, 5))


//- Criar uma função que recebe um parâmetro contendo um objeto com duas chave e valor, somar os valores e retornar o valor da soma.

const soma = {
    n1 : 2,
    n2 : 5
}

function somar(soma) {
    return soma.n1 + soma.n2

}

console.log(somar(soma))


// - Criar uma função que recebe um array de N números, varre o array, soma todos os números e retorna o valor da soma.

const numeros = [5, 6, 2, 10, 3, 5]

function somar(numeros) {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma
}

console.log(numeros);
console.log(somar(numeros));


// Concatenar string

const arrayPalavras = ['maça', 'banana', 'uva', 'morango'];

function palavras(arrayPalavras) {
    let soma = "";

    for (let i = 0; i < arrayPalavras.length; i++) {

        if(i + 1 == arrayPalavras.length) {
            soma += `${arrayPalavras[i]}.`
        } else {
            soma += `${arrayPalavras[i]}, `
        }
    }
    return soma
}

console.log(palavras(arrayPalavras));