function guardarRegistro() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

     // Crear un objeto con los datos del usuario
     var usuario = {
      nombre: nombre,
      email: email,
      password: password
    };

    // Obtener los datos existentes (si los hay) del almacenamiento local
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Agregar el nuevo usuario al arreglo de usuarios
    usuarios.push(usuario);

    // Guardar el arreglo de usuarios actualizado en el almacenamiento local
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Mostrar un mensaje de éxito
    alert('Registro exitoso. ¡Ahora puedes iniciar sesión!');

    // Redireccionar a la página de inicio de sesión después del registro
    window.location.href = 'index.html';
  }