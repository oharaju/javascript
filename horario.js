var agora = new Date()
var hora = agora.getHours() //Pega o horário atual do sistema

//Condições Aninhadas
if (hora <= 4) {
    console.log("Boa madrugada!")

} else if (hora < 12) {
    console.log("Bom dia!")

} else if (hora <= 18) {
    console.log("Boa tarde!")

} else {
    console.log("Boa noite!")
}