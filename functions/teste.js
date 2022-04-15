function n () {
  const nome = 'julia';
  return nome;
}
const chat = n()
console.log(chat)


//
function n (x) {
  return x;
}
console.log(n('julia'))



//
const n = function () {
  const nome = 'julia';
  return nome;
}
console.log(n())



// Arrow
const n = () => {
  const nome = 'julia';
  return nome;
}
console.log(n())



//
const pernambuco = ['azul', 'amarelo', 'vermelho', 'verde', 'branco']

for (let c = 0; c < pernambuco.length; c++) {
  console.log(`${c} ${pernambuco}`)
}


/*
console.log(pernambuco)
console.log(pernambuco.length)
console.log(pernambuco.indexOf('verde'))
*/