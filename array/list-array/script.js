const lista = document.querySelector('ul.lista');
const nomes = ['Júlia', 'Caio', 'Juninho', 'João'];


for (let i = 0; i < nomes.length; i++) {
  const item = document.createElement('li'); // Criei uma li via js
  item.appendChild(document.createTextNode(nomes[i]));
  lista.appendChild(item);
}