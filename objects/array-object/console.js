const exercicio1 = [{
  nome: 'geladeira',
  preco: 'R$4.000,00',
  cores: ['branca', 'preta', 'inox'],
},{
  nome: 'fogao',
  preco: 'R$1.500,00',
  cores: ['vermelho', 'preta', 'branco', 'cinza'],
}];


for (let i = 0; i < exercicio1.length; i++) {
  console.log(exercicio1[i].nome)

  for (let j = 0; j < exercicio1[i].cores.length; j++) {
    console.log(exercicio1[i].cores[j])
  }
}

/*
exercicio1.forEach(exercicio1 => {
  console.log(exercicio1.nome)
  console.log(exercicio1.cores)

})
*/

// Notas de Alunos
const alunosNotas = [{
  nome: 'Lucas',
  notas:[8, 7, 9, 7]
}, {
  nome: 'Mateus',
  notas: [7, 8, 6, 10]
}, {
  nome: 'Bernado',
  notas: [9, 4, 7, 8]
}]

let total = 2;

for (let i = 0; i < alunosNotas.length; i++){

  for (let j = 3; j < alunosNotas[i].notas.length; j++){
    console.log("O aluno " + alunosNotas[i].nome + " ficou com as notas " + alunosNotas[i].notas)
  }
}
