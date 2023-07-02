function calcular() {
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);
    var step = parseInt(document.getElementById("step").value);

    if (start >= end) {
        alert("El número de inicio debe ser menor al número de fin.");
        return;
    }

    if (step <= 0) {
        alert("El step debe ser mayor que cero.");
        return;
    }

    var array = generarArray(start, end, step);
    mostrarArray(array);
}

function generarArray(start, end, step) {
    var array = [];

    for (var i = start; i <= end; i += step) {
        array.push(i);
    }

    return array;
}

function mostrarArray(array) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerText = array.join(", ");
}
