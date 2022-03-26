function addClass() {
  var caixa = document.querySelector('div.box');
  caixa.classList.add("color");
}

function removeClass() {
  var caixa = document.querySelector('div.box');
  caixa.classList.remove("color");
}

function toggleClass() { //Alternancia
  var caixa = document.querySelector('div.box');
  caixa.classList.toggle("color");
}