window.addEventListener('DOMContentLoaded', inicio);

function inicio() {
    document.getElementById('formulario').addEventListener('submit', validar);
}

function validar(evt) {
    const nombre = document.getElementById('firstName').value;
    const apellido = document.getElementById('lastName').value;
    const fechaNacimiento = document.getElementById('nacimiento').value;
    let dni = document.getElementById('DNI').value;


    const invalidFirstName = document.getElementById('invalidFirstName')
    const invalidLastName = document.getElementById('invalidLastName')
    const invalidId = document.getElementById('invalidId')
    const invalidBirthday = document.getElementById('invalidBirthday')
    const invalidRadio = document.getElementById('invalidRadio')
    const invalidCheckBox = document.getElementById('invalidCheckBox')

    if (nombre == '' || apellido == '') {
        alert('ESTUPIDO DE MIERDA');
        evt.preventDefault();

    }
    let isValid = true

    const validateInputs = [nombre.value, apellido.value, inputId.value, fechaNacimiento.value]
    validateInputs.forEach(function (invalidValue, index) {
        if (!isNaN(invalidValue) || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(invalidValue)) {
            if (index == 0) {
                invalidFirstName.innerHTML = 'Invalid value, only letters'
                isValid = false
                return
            }
        }
        if (!isNaN(invalidValue) || !/^([a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+\s)*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(invalidValue)) {
            if (index == 1) {
                invalidLastName.innerHTML = 'Invalid value, only letters'
                isValid = false
                return
            }
        }
        if (!/^[0-9]{7,8}$/.test(invalidValue)) {
            if (index == 2) {
                invalidId.innerHTML = 'Invalid value, only numbers (7 or 8)'
                isValid = false
                return
            }
        }
        if (!isNaN(invalidValue) || /^(\d{2})-(\d{2})-(\d{4})$/.test(invalidValue)) {
            if (index == 3) {
                invalidBirthday.innerHTML = 'Invalid value, only numbers'
                isValid = false
                return
            }
        }

    })
}
window.addEventListener('DOMContentLoaded', function () {
   

    const urlparams = new URLSearchParams(window.location.search)
    const nacimientovalue = urlparams.get('fechaNacimiento')
    const nacimientoformat = nacimientovalue.split('-').reverse().join('/')
    const dnivalue = urlparams.get('DNI')
    const dniformated = dniFormat(dnivalue)
    document.getElementById('displaynombre').innerHTML = urlparams.get('nombre')
    document.getElementById('displayapellido').innerHTML = urlparams.get('apellido')
    document.getElementById('displaynacimiento').innerHTML = nacimientoformat
    document.getElementById('displaydni').innerHTML = dniformated
    function dniFormat(id) {
        return id.replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1.")
    }
})  
