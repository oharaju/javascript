
let nomes = ['Júlia', 'Caio', 'Juninho', 'João'];
const buttonAdd = document.querySelector(".buttonAdd");
const buttonRemove = document.querySelector(".buttonRemove");
const input = document.querySelector('.input');

function generateList() {
  const lista = document.querySelector('ul.lista');
  for (let i = 0; i < nomes.length; i++) {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(nomes[i]));
    lista.appendChild(item);
  }
}

function removeItems() {
  document.querySelector('ul').innerHTML = "";
}

function clearInput() {
  input.value = "";
}

function addNewItem() {
  const valueInput = input.value;
  nomes.push(valueInput);
}

function handleSubmit() {
  addNewItem();
  clearInput();
  removeItems();
  generateList();
}

buttonAdd.addEventListener("click", function(e) {
  e.preventDefault();

  if (input.value.length > 0) {
    handleSubmit();
  }
});

buttonRemove.addEventListener("click", function() {
  removeItems();
});

generateList();