const pessoas = [{
    nome: 'Caio',
    idade: 23
}, {
    nome:'Júlia',
    idade:21
}, {
    nome: 'João',
    idade: 18
}, {
    nome: 'Mateus',
    idade: 22
}]


for (var i = 0; i < pessoas.length; i++) {
    console.log("No indice " + [i] + " temos o nome " + `${pessoas[i].nome}`)
}