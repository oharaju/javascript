function somar () {
var texto1 = window.document.getElementById('txtn1')
var texto2 = window.document.getElementById('txtn2')
var res = window.document.getElementById('res')
var n1 = Number(texto1.value)
var n2 = Number(texto2.value)
var s = n1 + n2
res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}