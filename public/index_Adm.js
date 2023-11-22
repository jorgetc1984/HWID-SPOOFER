
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


