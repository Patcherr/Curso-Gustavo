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


const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = encodeURIComponent(document.getElementById('nombre').value);
  const apellido = encodeURIComponent(document.getElementById('apellido').value);
  const dni = encodeURIComponent(document.getElementById('dni').value);
  const fechaNacimiento = encodeURIComponent(document.getElementById('fechaNacimiento').value);
  const genero = encodeURIComponent(document.querySelector('input[name="genero"]:checked').value);
  const conocimientos = Array.from(document.querySelectorAll('input[name="conocimientos"]:checked')).map(input => input.value);
  const bio = encodeURIComponent(document.getElementById('bio').value);

  const queryString = `nombre=${nombre}&apellido=${apellido}&dni=${dni}&fechaNacimiento=${fechaNacimiento}&genero=${genero}&conocimientos=${conocimientos.join(',')}&bio=${bio}`;

  // Redireccionar a otro archivo HTML con los datos como query string
  window.location.href = `form.html?${queryString}`;
});

