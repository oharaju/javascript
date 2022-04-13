// OPERADOR TERNÁRIO
function parImpar (n) {
    return n % 2 == 0 ? "Par" : "Impar"

}

let res = parImpar(10)

console.log(`O valor é ${res}`) // console.log(parImpar(55))




// USANDO IF
function parImpar(n) {
    if (n % 2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

let resul = parImpar(33)

console.log(`o valor é ${resul}`)