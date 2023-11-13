class MarcadorPredictivo {
  constructor() {
    this.numeroActual = '';
  }

  marcar() {
    if (this.numeroActual !== '') {
      console.log('Marcando ' + this.numeroActual + '...');
      // Lógica para realizar la llamada saliente utilizando una API o biblioteca de telefonía
    } else {
      console.log('No se ha ingresado un número para marcar.');
    }
  }

  recibirLlamada(numero) {
    console.log('Llamada entrante de ' + numero);
    // Lógica para atender la llamada entrante y realizar las acciones necesarias
  }

  agregarDigito(digito) {
    this.numeroActual += digito;
    console.log('Número actual: ' + this.numeroActual);
    // Lógica para mostrar el número actual en la interfaz de usuario
    document.getElementById('numeroTelefono').value = this.numeroActual;
  }

  borrarUltimoDigito() {
    this.numeroActual = this.numeroActual.slice(0, -1);
    console.log('Número actual: ' + this.numeroActual);
    // Lógica para actualizar la interfaz de usuario
    document.getElementById('numeroTelefono').value = this.numeroActual;
  }
}

const marcador = new MarcadorPredictivo();

function mostrarCajaTexto(caja) {
  const cajas = document.querySelectorAll('.caja-texto');
  cajas.forEach(cajaTexto => {
    cajaTexto.style.display = 'none';
  });

  const cajaSeleccionada = document.getElementById(caja);
  if (cajaSeleccionada) {
    cajaSeleccionada.style.display = 'block';
  }
}

function agregarNumero(numero) {
  marcador.agregarDigito(numero);
}

function llamar() {
  marcador.marcar();
}

function recibirLlamada(numero) {
  marcador.recibirLlamada(numero);
}

function enviarCita() {
  const enviarCitaRadios = document.getElementsByName('enviarCita');
  let seleccionado = null;
  enviarCitaRadios.forEach(radio => {
    if (radio.checked) {
      seleccionado = radio.value;
    }
  });

  if (seleccionado === 'email') {
    const textoEmail = document.getElementById('textoEmail').value;
    console.log('Enviar cita por correo: ' + textoEmail);
  } else if (seleccionado === 'whatsapp') {
    const textoWhatsapp = document.getElementById('textoWhatsapp').value;
    console.log('Enviar cita por WhatsApp: ' + textoWhatsapp);
  } else if (seleccionado === 'chatInterno') {
    const textoChatInterno = document.getElementById('textoChatInterno').value;
    console.log('Enviar cita por chat interno: ' + textoChatInterno);
  }
}
// Evento de carga para iniciar CallBucDial
window.addEventListener('load', () => {
  llamar();

  // Ejemplo de llamada entrante
  recibirLlamada('123456789');
});

// Evento de clic en botones de calificación
const opcionesCalificacion = document.querySelectorAll('.opciones-calificacion button');
opcionesCalificacion.forEach(opcion => {
  opcion.addEventListener('click', () => {
    opcionesCalificacion.forEach(btn => {
      btn.classList.remove('seleccionado');
    });
    opcion.classList.add('seleccionado');
  });
});

// Función para agregar un número al cuadro de "Llamada Manual"
function agregarNumeroLlamadaManual(numero) {
  var cuadroLlamadaManual = document.getElementById("numeroTelefono");
  cuadroLlamadaManual.value += numero;
}

function finalizarSesion() {
  window.location.href = "./index.html";
}


