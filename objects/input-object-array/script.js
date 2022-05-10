let alunos = [];

function add(){
  const nomeAluno = document.querySelector('.nome').value;
  const notaAluno = document.querySelector('.nota').value;
  const resultado = document.querySelector('.resultado');

  const dados = {
    nome: nomeAluno,
    nota: notaAluno
  }
  alunos.push(dados)

  clearInput()
  resultado.innerHTML += ('O aluno ' + dados.nome + " ficou com a nota " + dados.nota)

}

function clearInput() { //Limpar input assim que submeter
  document.querySelector('.nome').value = "";
  document.querySelector('.nota').value = "";
}