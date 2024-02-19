document.addEventListener("DOMContentLoaded", function() {
  //Oculta todos los elementos para dejar solo el loader
  document.querySelector('.loader').style.display = 'block';
  document.querySelector('.contenido').style.display = 'none';
  document.querySelector('.bg').style.display = 'none';
  document.querySelector('.juego').style.display = 'none';

  //Carga el loader durante 4 segundos y despues se oculta y muestra el resto
  setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.contenido').style.display = 'block';
    document.querySelector('.bg').style.display = 'block';
  }, 3000);
});

//Muestra el juego al darle al boton
function jugar() {
  document.querySelector('.contenido').style.display = 'none';
  document.querySelector('.suelo').style.display = 'block';
  document.querySelector('.bg').style.display = 'none';
  document.querySelector('.juego').style.display = 'block';
}

let movimiento;
let direccionSalto = '';
let estaMoviendo = false; // Variable para controlar el movimiento
let saltando = false; // Variable para controlar el salto
const velocidad = 5; // Velocidad del personaje al correr
const tiempoIntervalo = 20; // Tiempo hasta que se reppite la funcion de correr

//Evento para cuando presionas la tecla "D"
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 68 && !estaMoviendo) {
    //Cambia la imagen a corriendo
    document.querySelector('.personaje').style.backgroundImage = 'url(Movimientos/correrderecha.gif)';

    //Inicia el movimiento continuo hacia la derecha
    movimiento = setInterval(function() {
      moverDerecha(velocidad);
    }, tiempoIntervalo);

    estaMoviendo = true;
  }
});

//Evento para cuando dejas de presionar la "D"
document.addEventListener('keyup', function(event) {
  if (event.keyCode === 68) {
    // Cambia la imagen a quieto
    document.querySelector('.personaje').style.backgroundImage = 'url(Movimientos/quietoder.gif)';

    //Deja de correr
    clearInterval(movimiento);
    estaMoviendo = false;
  }
});

//Función para mover el personaje hacia la derecha
function moverDerecha(velocidad) {
  const character = document.querySelector('.personaje');
  const posicionActual = parseInt(window.getComputedStyle(character).left);

  // Obtén el ancho total de la pantalla
  const anchoPantalla = window.innerWidth;

  // Calcula la nueva posición del personaje
  const nuevaPosicion = posicionActual + velocidad;

  // Verifica si la nueva posición está dentro de los límites de la pantalla
  if (nuevaPosicion + character.clientWidth < anchoPantalla) {
    // Mueve el personaje hacia la derecha
    character.style.left = nuevaPosicion + 'px';
  }
}

//Evento para cuando presionas la tecla "A"
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 65 && !estaMoviendo) {
    // Cambia la imagen del personaje corriendo
    document.querySelector('.personaje').style.backgroundImage = 'url(Movimientos/correrizquierda.gif)';

    //Empieza a correr
    movimiento = setInterval(function() {
      moverIzquierda(velocidad);
    }, tiempoIntervalo);

    estaMoviendo = true;
  }
});

//Evento para cuando dejas de presionar la "A"
document.addEventListener('keyup', function(event) {
  if (event.keyCode === 65) {
    // Cambia la imagen a quieto pero mirando a la izquierda porque estaba corriendo hacia la izquierda
    document.querySelector('.personaje').style.backgroundImage = 'url(Movimientos/quietoizq.gif)';

    //Deja de correr
    clearInterval(movimiento);
    estaMoviendo = false;
  }
});

//Función para mover el personaje hacia la izquierda
function moverIzquierda(velocidad) {
  const character = document.querySelector('.personaje');
  const posicionActual = parseInt(window.getComputedStyle(character).left);//En este caso es igual pero aplicaremos los pixeles negativos para que se mueva a la izq aunque tambien se podria hacer con right y pixeles positivos

  //Mueve el personaje hacia la izquierda
  character.style.left = posicionActual - velocidad + 'px';//Velocidad en negativo para que se mueva a la izquierda
};

//Determinar si la tecla pulsada es a o d para decidir en que deireccion esta mirando que sera necesario para cargar el gif correcto durante el salto
document.addEventListener('keydown', function(event) {
  if (event.code === 'KeyA') {
    estaMoviendo = true;
    direccionSalto = 'izquierda';
  } else if (event.code === 'KeyD') {
    estaMoviendo = true;
    direccionSalto = 'derecha';
  }

  if (event.keyCode === 32 && !saltando) {
    const direccion = estaMoviendo ? direccionSalto : '';
    saltar(direccion);
  }
});

document.addEventListener('keyup', function(event) {
  if (event.code === 'KeyA' || event.code === 'KeyD') {
    estaMoviendo = false;
    direccionSalto = ''; //Restablece la dirección del salto al soltar las teclas de movimiento
  }
});

function saltar(direccion) {
  const character = document.querySelector('.personaje');

  saltando = true;

  //Cambia la imagen a la del personaje saltando segun la direccion del salto
  if (direccion === 'izquierda') {
    character.style.backgroundImage = 'url(Movimientos/saltoizquierda.gif)';
  } else if (direccion === 'derecha') {
    character.style.backgroundImage = 'url(Movimientos/saltoderecha.gif)';
  } else {
    //Si no hay dirección, usa la imagen por defecto
    character.style.backgroundImage = 'url(Movimientos/saltoderecha.gif)'; // O la imagen predeterminada si no hay dirección
  }

  //Lama a la clase salto para que se ejecute la animacion
  character.classList.add('saltando');

  //Espera a que termine la animación y luego restablece todo
  setTimeout(function () {
    //Quita la clase saltando porque el salto ha acabado
    character.classList.remove('saltando');

    //Cambia a la animacion del personaje quieto dependiendo de la aplicación
    if (estaMoviendo) {
      if (direccion === 'derecha') {
        character.style.backgroundImage = 'url(Movimientos/quietoder.gif)';
      } else {
        character.style.backgroundImage = 'url(Movimientos/quietoizq.gif)';
      }
    }

    // Restablece la variable de salto
    saltando = false;
  }, 1250); //Duración del gif para que el salto se vea adecuadamente
}