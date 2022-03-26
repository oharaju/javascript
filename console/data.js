var data = new Date();
var diaDasemana = data.getDay();


switch (diaDasemana) {
  case 0: //js reconhece que domingo é 0
    console.log("Hoje é Domingo")
    break // obrigatório

  case 1:
    console.log("Hoje é Segunda")
    break

  case 2:
    console.log("Hoje é Terca")
    break

  case 3:
    console.log("Hoje é Quarta")
    break

  case 4:
    console.log("Hoje é Quinta")
    break

  case 5:
    console.log("Hoje é Sexta")
    break

  case 6:
    console.log("Hoje é Sábado")
}