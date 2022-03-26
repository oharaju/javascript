var idade = 18
console.log(`Você tem ${idade} anos`)

//Condições Aninhadas
if (idade < 16) {
    console.log(`Você não vota`)

} else if (idade < 18 || idade >= 65) {
        console.log(`Voto opcional`)

} else {
    console.log(`Voto obrigatório!`)
}