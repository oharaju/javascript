let alunos = [];
const button = document.querySelector("button");

function generateList() {
  const lista = document.querySelector('.lista');

  for (let i = 0; i < alunos.length; i++) {
    const text = ("Nome: " + `${alunos[i].nome}` + " Nota: " + `${alunos[i].nota} `)

    const item = document.createElement('li');
    item.appendChild(document.createTextNode(text));
    lista.appendChild(item);
  }

}


function clearInput() { //Limpar input assim que submeter
  document.querySelector('.nome').value = "";
  document.querySelector('.nota').value = "";
}


function removeItems() {
  document.querySelector('.lista').innerHTML = "";
}

function handleSubmit() {
  const nomeAluno = document.querySelector('.nome').value;
  const notaAluno = document.querySelector('.nota').value;

  const notas = {
    nome: nomeAluno,
    nota: notaAluno
  }

  alunos.push(notas)


  clearInput()
  removeItems()
  generateList()
}


button.addEventListener("click", function(e) {
  e.preventDefault();
});