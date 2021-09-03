const formulario = document.getElementById("formulario")
const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
const somar = document.getElementById("somar")
const dividir = document.getElementById("dividir")
const subtrair = document.getElementById("subtrair")
const multiplicar = document.getElementById("multiplicar")


function somador() {

    if (numero1.value == "" | numero2.value == "") {
        alert("Você deve preencher todos os campos!!!")
    } else {
        formulario.classList.add("somando")
        formulario.classList.remove("dividindo")
        formulario.classList.remove("subtraindo")
        formulario.classList.remove("multiplicando")
        resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
    }
}

somar.addEventListener("click", somador)

function divisor() {

    if (numero1.value == "" | numero2.value == "") {
        alert("Você deve preencher todos os campos!!!")
    } else {
        formulario.classList.add("dividindo")
        formulario.classList.remove("somando")
        formulario.classList.remove("subtraindo")
        formulario.classList.remove("multiplicando")
        resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
    }
}

dividir.addEventListener("click", divisor)

function multiplicador() {

    if (numero1.value == "" | numero2.value == "") {
        alert("Você deve preencher todos os campos!!!")
    } else {
        formulario.classList.add("multiplicando")
        formulario.classList.remove("dividindo")
        formulario.classList.remove("subtraindo")
        formulario.classList.remove("somando")
        resultado.value = parseInt(numero1.value) * parseInt(numero2.value)
    }
}

multiplicar.addEventListener("click", multiplicador)

function subtrador() {

    if (numero1.value == "" | numero2.value == "") {
        alert("Você deve preencher todos os campos!!!")
    } else {
        formulario.classList.add("subtraindo")
        formulario.classList.remove("dividindo")
        formulario.classList.remove("somando")
        formulario.classList.remove("multiplicando")
        resultado.value = parseInt(numero1.value) - parseInt(numero2.value)
    }
}

subtrair.addEventListener("click", subtrador)