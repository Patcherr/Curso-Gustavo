function calcularOperacion() {
    const num1 = parseFloat(document.getElementById('Valor1').value)
    const num2 = parseFloat(document.getElementById('Valor2').value)
    const radioOperacion = document.getElementsByName('Operador')
    const mostrarResultado = document.getElementById('resultado')




    let Operador
    radioOperacion.forEach(function (radio) {
        if (radio.checked) {
            Operador = radio.value
        }
    })

    if (isNaN(num1)) {
        alert('Error. Ingrese nuevamente ESTUPIDO!: ')
        return
    } else if (isNaN(num2)) {
        alert('Error. Ingrese nuevamenete ESTUPIDO!: ')
        return
    }

    let resultado
    if (Operador == 'sumar') {
        resultado = num1 + num2
        mostrarResultado.value = resultado
    }
    if (Operador == 'resta') {
        resultado = num1 - num2
        mostrarResultado.value = resultado
    }
    if (Operador == 'multiplicar') {
        resultado = num1 * num2
        mostrarResultado.value = resultado
    }
    if (Operador == 'division') {
        resultado = num1 / num2
        mostrarResultado.value = resultado
    }
}

function limpiarNumero() {
    const limpiar = document.getElementById('resultado')
    limpiar.value = ''
}

