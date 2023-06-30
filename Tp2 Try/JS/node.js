/* const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Aquí puedes realizar alguna acción adicional al enviar el formulario, como enviar los datos a un servidor o realizar validaciones.
  // Por ejemplo, podrías acceder a los valores de los campos de la siguiente manera:
  
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const dni = document.getElementById('dni').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const genero = document.querySelector('input[name="genero"]:checked').value;
  const conocimientos = Array.from(document.querySelectorAll('input[name="conocimientos"]:checked')).map(input => input.value);
  const bio = document.getElementById('bio').value;
  
  // Aquí puedes hacer lo que necesites con los valores de los campos del formulario
  
  // Por ejemplo, podrías mostrar una alerta con los valores ingresados:
  
  alert(`Valores ingresados:\n\nNombre: ${nombre}\nApellido: ${apellido}\nDNI: ${dni}\nFecha de Nacimiento: ${fechaNacimiento}\nGénero: ${genero}\nConocimientos: ${conocimientos.join(', ')}\nBiografía: ${bio}`);
}); */


const formulario = document.getElementById('Formulario');
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function (event) {
  event.preventDefault();

  const nombre = encodeURIComponent(document.getElementById('nombre').value);
  const apellido = encodeURIComponent(document.getElementById('apellido').value);
  const dni = encodeURIComponent(document.getElementById('dni').value);
  const fechaNacimiento = encodeURIComponent(document.getElementById('fechaNacimiento').value);
  const genero = encodeURIComponent(document.querySelector('input[name="genero"]:checked').value);
  const conocimientos = Array.from(document.querySelectorAll('input[name="conocimientos"]:checked')).map(input => input.value);
  const bio = encodeURIComponent(document.getElementById('bio').value);
  formulario.submit();


});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nombre = urlParams.get('nombre');
const apellido = urlParams.get('apellido');
const dni = urlParams.get('dni');
const fechaNacimiento = urlParams.get('fechaNacimiento');
const genero = urlParams.get('genero');
const conocimientos = urlParams.get('conocimientos');
const bio = urlParams.get('bio');

// Ahora puedes hacer lo que desees con los datos del formulario en otro_archivo.html
// Por ejemplo, puedes mostrar los valores en la página:
document.getElementById('nombreResultado').innerHTML = nombre;
document.getElementById('apellidoResultado').innerHTML = apellido;
document.getElementById('dniResultado').innerHTML = dni;
document.getElementById('fechaNacimientoResultado').innerHTML = fechaNacimiento;
document.getElementById('generoResultado').innerHTML = genero;
document.getElementById('conocimientosResultado').innerHTML = conocimientos;
document.getElementById('bioResultado').innerHTML = bio




