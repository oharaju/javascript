
let nomes = ['Júlia', 'Caio', 'Juninho', 'João'];
const button = document.querySelector("button");

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
  const input = document.querySelector('input.input');
  input.value = "";
}

function handleSubmit() {
  const input = document.querySelector('input.input');
  const valueInput = input.value;

  nomes.push(valueInput);

  clearInput()
  removeItems();
  generateList();
}

button.addEventListener("click", function(e) {
  e.preventDefault();

  handleSubmit
});

generateList();