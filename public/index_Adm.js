<<<<<<< HEAD
<<<<<<< Upstream, based on origin/master

document.addEventListener('DOMContentLoaded', function () {
  // Agregar lógica para Configuración de Usuarios
  document.getElementById('configuracionUsuarios').addEventListener('click', function () {
    // Tu lógica aquí para configuración de usuarios
    alert('Configuración de Usuarios');
  });

  // Agregar lógica para Configuración de Listas
  document.getElementById('configuracionListas').addEventListener('click', function () {
    // Tu lógica aquí para configuración de listas
    alert('Configuración de Listas');
  });

  // Agregar lógica para Configuración VoIP
  document.getElementById('configuracionVoIP').addEventListener('click', function () {
    // Tu lógica aquí para configuración VoIP
    alert('Configuración VoIP');
  });

  // Agregar lógica para Llamadas Inbound
  document.getElementById('llamadasInbound').addEventListener('click', function () {
    // Tu lógica aquí para llamadas inbound
    alert('Llamadas Inbound');
  });

  // Agregar lógica para Grabación de Llamadas
  document.getElementById('grabacionLlamadas').addEventListener('click', function () {
    // Tu lógica aquí para grabación de llamadas
    alert('Grabación de Llamadas');
  });

  // Agregar lógica para Monitor de Asesores
  document.getElementById('monitorAsesores').addEventListener('click', function () {
    // Tu lógica aquí para monitor de asesores
    alert('Monitor de Asesores');
  });

  // Agregar lógica para Reportes
  document.getElementById('reportes').addEventListener('click', function () {
    // Tu lógica aquí para reportes
    alert('Reportes');
  });

  // Agregar lógica para Cerrar Sesión
  document.getElementById('cerrarSesion').addEventListener('click', function () {
    // Tu lógica aquí para cerrar sesión
    alert('Cerrar Sesión');
  });
});


<body>
  <!-- Agrega tu estructura HTML aquí -->

  <ul>
    <li id="configuracionUsuarios">Configuración de Usuarios</li>
    <li id="configuracionListas">Configuración de Listas</li>
    <li id="configuracionVoIP">Configuración VoIP</li>
    <li id="llamadasInbound">Llamadas Inbound</li>
    <li id="grabacionLlamadas">Grabación de Llamadas</li>
    <li id="monitorAsesores">Monitor de Asesores</li>
    <li id="reportes">Reportes</li>
    <li id="cerrarSesion">Cerrar Sesión</li>
  </ul>
</body>

function finalizarSesion() {
  window.location.href = "./index.html";
}


=======

document.addEventListener('DOMContentLoaded', function () {
  // Agregar lógica para Configuración de Usuarios
  document.getElementById('configuracionUsuarios').addEventListener('click', function () {
    // Tu lógica aquí para configuración de usuarios
    alert('Configuración de Usuarios');
  });

  // Agregar lógica para Configuración de Listas
  document.getElementById('configuracionListas').addEventListener('click', function () {
    // Tu lógica aquí para configuración de listas
    alert('Configuración de Listas');
  });

  // Agregar lógica para Configuración VoIP
  document.getElementById('configuracionVoIP').addEventListener('click', function () {
    // Tu lógica aquí para configuración VoIP
    alert('Configuración VoIP');
  });

  // Agregar lógica para Llamadas Inbound
  document.getElementById('llamadasInbound').addEventListener('click', function () {
    // Tu lógica aquí para llamadas inbound
    alert('Llamadas Inbound');
  });

  // Agregar lógica para Grabación de Llamadas
  document.getElementById('grabacionLlamadas').addEventListener('click', function () {
    // Tu lógica aquí para grabación de llamadas
    alert('Grabación de Llamadas');
  });

  // Agregar lógica para Monitor de Asesores
  document.getElementById('monitorAsesores').addEventListener('click', function () {
    // Tu lógica aquí para monitor de asesores
    alert('Monitor de Asesores');
  });

  // Agregar lógica para Reportes
  document.getElementById('reportes').addEventListener('click', function () {
    // Tu lógica aquí para reportes
    alert('Reportes');
  });

  // Agregar lógica para Cerrar Sesión
  document.getElementById('cerrarSesion').addEventListener('click', function () {
    // Tu lógica aquí para cerrar sesión
    alert('Cerrar Sesión');
  });
});


<body>
  <!-- Agrega tu estructura HTML aquí -->

  <ul>
    <li id="configuracionUsuarios">Configuración de Usuarios</li>
    <li id="configuracionListas">Configuración de Listas</li>
    <li id="configuracionVoIP">Configuración VoIP</li>
    <li id="llamadasInbound">Llamadas Inbound</li>
    <li id="grabacionLlamadas">Grabación de Llamadas</li>
    <li id="monitorAsesores">Monitor de Asesores</li>
    <li id="reportes">Reportes</li>
    <li id="cerrarSesion">Cerrar Sesión</li>
  </ul>
</body>

function registrar(usuario, password, campaña) {
  var extensionesValidas = ["Admin"];
  var claveValida = "654321";
  var campañaValida = "server";

  if (
    extensionesValidas.includes(usuario) &&
    password === claveValida &&
    campaña === campañaValida
  ) {
    // Registro exitoso, redireccionar a la segunda página
    window.location.href = "./index_Amd.html";
  } else {
    alert("Error en el registro. Verifica los datos ingresados.");
  }
}

// Otras funciones o código adicional puede ir aquí

window.addEventListener("load",);

function finalizarSesion() {
  window.location.href = "./index_Amd.html";
}


function mostrarOpciones(idOpciones) {
  var opciones = document.getElementById(idOpciones);
  opciones.style.display = (opciones.style.display === "block") ? "none" : "block";
}

function agregarUsuario() {
  alert("// Supongamos que tienes un formulario HTML con campos de usuario, clave y campaña.

  // Manejar la solicitud de creación de usuario desde el frontend al backend.
  function createUser() {
      const usuario = document.getElementById('usuario').value;
      const clave = document.getElementById('clave').value;
      const campaña = document.getElementById('campaña').value;

      // Validar la información del usuario (puedes usar bibliotecas como validator.js).
      // ...

      // Hacer una solicitud al servidor para crear un nuevo usuario.
      fetch('/api/crearUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, clave, campaña }),
      })
        .then(response => response.json())
        .then(data => {
          // Manejar la respuesta del servidor.
          console.log(data);
        })
        .catch(error => console.error('Error:', error));
    }
  ");
}

function eliminarUsuario() {
  alert(// Supongamos que tienes un formulario HTML con un campo para la identificación única del usuario a eliminar.

    // Manejar la solicitud de eliminación de usuario desde el frontend al backend.
    function deleteUser() {
      const usuarioId = document.getElementById('usuarioId').value;

      // Hacer una solicitud al servidor para eliminar un usuario.
      fetch(`/api/eliminarUsuario/${usuarioId}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          // Manejar la respuesta del servidor.
          console.log(data);
        })
        .catch(error => console.error('Error:', error));
    }
  );
}

function modificarUsuario() {
  alert(// Supongamos que tienes un formulario HTML con campos para la identificación única y la nueva información del usuario.

    // Manejar la solicitud de modificación de usuario desde el frontend al backend.
    function updateUser() {
      const usuarioId = document.getElementById('usuarioId').value;
      const nuevoUsuario = document.getElementById('nuevoUsuario').value;
      const nuevaClave = document.getElementById('nuevaClave').value;
      const nuevaCampaña = document.getElementById('nuevaCampaña').value;

      // Hacer una solicitud al servidor para modificar un usuario.
      fetch(`/api/modificarUsuario/${usuarioId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nuevoUsuario, nuevaClave, nuevaCampaña }),
      })
        .then(response => response.json())
        .then(data => {
          // Manejar la respuesta del servidor.
          console.log(data);
        })
        .catch(error => console.error('Error:', error));
    }
  );
}

function agregarLista() {
  alert(function agregarListaDesdeCSV() {
    const nombreLista = prompt('Ingrese el nombre de la Lista:');
    const csvData = prompt('Ingrese los datos de la Lista en formato CSV (nombre,telefono,email,...):');

    if (nombreLista && csvData) {
      // Aquí puedes realizar la lógica para agregar la lista desde CSV a tu aplicación
      // Puedes hacer una solicitud al servidor o manejarlo directamente en el cliente, según tu arquitectura.

      // Ejemplo de cómo podrías manejarlo en el cliente (puedes adaptarlo a tu lógica):
      alert(`Agregando Lista desde CSV: ${nombreLista}, Datos: ${csvData}`);
    } else {
      alert('El nombre de la Lista y los datos CSV no pueden estar vacíos.');
    }
  }
  );
}

function eliminarLista() {
  alert(function eliminarLista() {
    const nombreLista = prompt('Ingrese el nombre de la Lista a eliminar:');

    if (nombreLista) {
      // Aquí puedes realizar la lógica para eliminar la lista de tu aplicación
      // Puedes hacer una solicitud al servidor o manejarlo directamente en el cliente, según tu arquitectura.

      // Ejemplo de cómo podrías manejarlo en el cliente (puedes adaptarlo a tu lógica):
      alert(`Eliminando Lista: ${nombreLista}`);
    } else {
      alert('El nombre de la Lista no puede estar vacío.');
    }
  }
  );
}

function modificarLista() {
  alert(function modificarLista() {
    const nombreLista = prompt('Ingrese el nombre de la Lista a modificar:');
    const nuevoNombreLista = prompt('Ingrese el nuevo nombre de la Lista:');
    const nuevoCSVData = prompt('Ingrese los nuevos datos de la Lista en formato CSV (nombre,telefono,email,...):');

    if (nombreLista && nuevoNombreLista && nuevoCSVData) {
      // Aquí puedes realizar la lógica para modificar la lista en tu aplicación
      // Puedes hacer una solicitud al servidor o manejarlo directamente en el cliente, según tu arquitectura.

      // Ejemplo de cómo podrías manejarlo en el cliente (puedes adaptarlo a tu lógica):
      alert(`Modificando Lista: Cambiando ${nombreLista} a ${nuevoNombreLista}, Nuevos Datos: ${nuevoCSVData}`);
    } else {
      alert('Los nombres de la Lista y los datos CSV no pueden estar vacíos.');
    }
  }
  );
}

function Volver() {
  // Agrega lógica para volver según sea necesario
}


// ... Código existente ...

function agregarBaseDeDatos() {
  const nombreBaseDeDatos = prompt('Ingrese el nombre de la Base de Datos:');
  marcador.agregarBaseDeDatos(nombreBaseDeDatos);
}

function agregarTroncal() {
  const nombreTroncal = prompt('Ingrese el nombre de la Troncal:');
  marcador.agregarTroncal(nombreTroncal);
}

function agregarNumeroVirtual() {
  const numeroVirtual = prompt('Ingrese el Número Virtual:');
  marcador.agregarNumeroVirtual(numeroVirtual);
}

// ... Código existente ...
function mostrarOpciones(idOpciones) {
  var opciones = document.getElementById(idOpciones);
  var botones = document.querySelectorAll('.opciones-configuracion');

  // Oculta todas las opciones antes de mostrar la seleccionada
  botones.forEach(function (boton) {
    if (boton.id !== idOpciones) {
      boton.style.display = 'none';
    }
  });

  opciones.style.display = (opciones.style.display === 'block') ? 'none' : 'block';
}

// Modifica la función mostrarOpciones en tu archivo JavaScript
function mostrarOpciones(idMinipantalla) {
  var minipantalla = document.getElementById(idMinipantalla);
  minipantalla.style.display = (minipantalla.style.display === 'block') ? 'none' : 'block';
}


>>>>>>> aa47103 Jorge_Toloza_GA7-220501096-AA5-EV04-API_2
=======

document.addEventListener('DOMContentLoaded', function () {
  // Agregar lógica para Configuración de Usuarios
  document.getElementById('configuracionUsuarios').addEventListener('click', function () {
    // Tu lógica aquí para configuración de usuarios
    alert('Configuración de Usuarios');
  });

  // Agregar lógica para Configuración de Listas
  document.getElementById('configuracionListas').addEventListener('click', function () {
    // Tu lógica aquí para configuración de listas
    alert('Configuración de Listas');
  });

  // Agregar lógica para Configuración VoIP
  document.getElementById('configuracionVoIP').addEventListener('click', function () {
    // Tu lógica aquí para configuración VoIP
    alert('Configuración VoIP');
  });

  // Agregar lógica para Llamadas Inbound
  document.getElementById('llamadasInbound').addEventListener('click', function () {
    // Tu lógica aquí para llamadas inbound
    alert('Llamadas Inbound');
  });

  // Agregar lógica para Grabación de Llamadas
  document.getElementById('grabacionLlamadas').addEventListener('click', function () {
    // Tu lógica aquí para grabación de llamadas
    alert('Grabación de Llamadas');
  });

  // Agregar lógica para Monitor de Asesores
  document.getElementById('monitorAsesores').addEventListener('click', function () {
    // Tu lógica aquí para monitor de asesores
    alert('Monitor de Asesores');
  });

  // Agregar lógica para Reportes
  document.getElementById('reportes').addEventListener('click', function () {
    // Tu lógica aquí para reportes
    alert('Reportes');
  });

  // Agregar lógica para Cerrar Sesión
  document.getElementById('cerrarSesion').addEventListener('click', function () {
    // Tu lógica aquí para cerrar sesión
    alert('Cerrar Sesión');
  });
});


<body>
  <!-- Agrega tu estructura HTML aquí -->

  <ul>
    <li id="configuracionUsuarios">Configuración de Usuarios</li>
    <li id="configuracionListas">Configuración de Listas</li>
    <li id="configuracionVoIP">Configuración VoIP</li>
    <li id="llamadasInbound">Llamadas Inbound</li>
    <li id="grabacionLlamadas">Grabación de Llamadas</li>
    <li id="monitorAsesores">Monitor de Asesores</li>
    <li id="reportes">Reportes</li>
    <li id="cerrarSesion">Cerrar Sesión</li>
  </ul>
</body>

function finalizarSesion() {
  window.location.href = "./index.html";
}


>>>>>>> 90d2bf62134855c163195b1099cbb81bd84e18a5
