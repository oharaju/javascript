// IMPRIMIR APENAS AS STRINGS
let listaMista = [1,'dois', 3, 'quatro', 5, 'seis']

for (let n = 0; n < listaMista.length; n++) { // Percorrer (varrer) um array

  if(typeof listaMista[n] == 'string') {
    console.log(listaMista[n])

  }
}



// IMPRIMIR APENAS NÚMEROS
let listaIdades = [10, 'onze', 20, 'treze', 5, 16, 'seis']

for (let i = 0; i < listaIdades.length; i++) {

  if (typeof listaIdades[i] == 'number') {
    console.log(listaIdades[i])
  }
}