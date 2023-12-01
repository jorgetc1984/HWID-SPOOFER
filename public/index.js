// Esperar a que se cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
  // Obtener el formulario y los campos de entrada
  var form = document.getElementById('loginform');
  var usuarioInput = document.getElementById('usuario');
  var passwordInput = document.getElementById('password');
  var campañaSelect = document.getElementById('campaña');

  // Agregar evento de envío al formulario
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos de entrada
    var usuario = usuarioInput.value;
    var password = passwordInput.value;
    var campaña = campañaSelect.value;

    registrar(usuario, password, campaña); // Llamar a la función registrar con los valores obtenidos

    // Restablecer los campos del formulario
    form.reset();
  });

  // Verificar si el asesor tiene acceso a la segunda página
  if (!localStorage.getItem("token")) {
    // Si no se encuentra el token en el almacenamiento local
    // Redirigir a la primera página (página de registro de usuarios)
  }

  var params = new URLSearchParams(window.location.search);
  var registrado = params.get("registrado");

  if (registrado === "true") {
    alert("Registro exitoso. ¡Bienvenido!");
  }
});

function registrar(usuario, password, campaña) {
  var extensionesValidas = ["101", "102", "103"];
  var claveValida = "123456";
  var campañaValida = "paneles";

  if (
    extensionesValidas.includes(usuario) &&
    password === claveValida &&
    campaña === campañaValida
  ) {
    // Registro exitoso, redireccionar a la segunda página
    window.location.href = "file:///E:/Programacion2023/sena-app/public/index1.html";
  } else {
    alert("Error en el registro. Verifica los datos ingresados.");
  }
}

// Otras funciones o código adicional puede ir aquí

window.addEventListener("load", iniciarCallBucDial);

