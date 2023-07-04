function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Obtener los usuarios registrados del almacenamiento local
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar el inicio de sesión
    var usuarioEncontrado = usuarios.find(function(usuario) {
      return usuario.email === email && usuario.password === password;
    });

    if (usuarioEncontrado) {
      // Redireccionar a la otra página con los datos del usuario
      window.location.href = 'datos.html';
    } else {
      alert('Credenciales inválidas');
    }
  }