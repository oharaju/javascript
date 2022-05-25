let alunos = [];
const inputNome = document.querySelector('.nome');
const inputNota = document.querySelector('.nota');
const buttonAdd = document.querySelector(".buttonAdd");
const lista = document.querySelector('.lista');

function generateList() {
  for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    const text = ("Nome: " + `${aluno.nome}` + " Nota: " + `${aluno.nota}`);

    const item = document.createElement('li');
    item.appendChild(document.createTextNode(text));
    lista.appendChild(item);
  }
}

function clearInput() {
  inputNome.value = "";
  inputNota.value = "";
}

function removeItems() {
  lista.innerHTML = "";
}

function addItem() {
  const nomeAluno = inputNome.value;
  const notaAluno = inputNota.value;

  const aluno = {
    nome: nomeAluno,
    nota: notaAluno
  }
  alunos.push(aluno)
}

function handleSubmit() {
  addItem();
  clearInput();
  removeItems();
  generateList();
}

buttonAdd.addEventListener("click", function(e) {
  e.preventDefault();
  
  if(inputNome.value.length > 0 && inputNota.value.length > 0) {
    handleSubmit();
  }
});