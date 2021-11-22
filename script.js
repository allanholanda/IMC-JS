var nome = document.getElementById("txtnome")
var idade = document.getElementById("txtidade")
var peso = document.getElementById("txtpeso")
var altura = document.getElementById("txtaltura")
var list = document.getElementById("selimc")

function imc() {
    if (nome,idade,peso,altura.value.length == 0) {
        window.alert('Por favor, insira os dados')
    } else {
        let n = String(nome.value)
        let i = Number(idade.value)
        let p = Number(peso.value)
        let a = Number(altura.value)

        let calcImc = p / (a*a)
        
        let item = document.createElement('option')
        item.text = `${n} │ ${i} anos │ ${p}Kg │ ${a}m │ ${calcImc.toFixed(2)}Kg/m²`
        list.appendChild(item)
    }
    nome.value = ''
    idade.value = ''
    peso.value = ''
    altura.value = ''
    nome.focus()

}
function finalizar() {
    while(list.lastChild.value =! list.firstChild.value) {
        list.removeChild(list.lastChild)
    if(list.firstChild.value == list.lastChild.value) {
        break
    }
    }
}