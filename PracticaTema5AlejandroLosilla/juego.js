document.addEventListener("DOMContentLoaded", function() {
  //Oculta todos los elementos para dejar solo el loader
  document.querySelector('.loader').style.display = 'block';
  document.querySelector('.contenido').style.display = 'none';
  document.querySelector('.bg').style.display = 'none';
  document.querySelector('.suelo').style.display = 'none';
  document.querySelector('.nube1').style.display = 'none';
  document.querySelector('.nube2').style.display = 'none';
  document.querySelector('.nube3').style.display = 'none';
  document.querySelector('.nube4').style.display = 'none';
  document.querySelector('.personaje').style.display = 'none';

  //Carga el loader durante 4 segundos y despues se oculta y muestra el resto
  setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.contenido').style.display = 'block';
    document.querySelector('.bg').style.display = 'block';
  }, 4000);
});

//Muestra el juego al darle al boton
function jugar() {
  document.querySelector('.contenido').style.display = 'none';
  document.querySelector('.suelo').style.display = 'block';
  document.querySelector('.bg').style.display = 'none';
  document.querySelector('.nube1').style.display = 'block';
  document.querySelector('.nube2').style.display = 'block';
  document.querySelector('.nube3').style.display = 'block';
  document.querySelector('.nube4').style.display = 'block';
  document.querySelector('.personaje').style.display = 'block';
}

let movimiento;
let estaMoviendo = false; // Variable para controlar el movimiento
const velocidad = 5; // Velocidad del personaje al correr
const tiempoIntervalo = 20; // Tiempo hasta que se reppite la funcion de correr

//Evento para cuando presionas la tecla "D"
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 68 && !estaMoviendo) {
    //Cambia la imagen a corriendo
    document.querySelector('.personaje').style.backgroundImage = 'url(Movimientos/corriendoder.gif)';

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
  const posicionActual = parseInt(window.getComputedStyle(character).left); //Left hace referencia a position left sobre la imagen de modo que hace espacio a la izquierda de la imagen y de esa forma se mueve a la derecha

  //Mueve el personaje hacia la derecha
  character.style.left = posicionActual + velocidad + 'px';
};

//Evento para cuando presionas la tecla "A"
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 65 && !estaMoviendo) {
    // Cambia la imagen del personaje corriendo
    document.querySelector('.personaje').style.backgroundImage = 'url(Movimientos/corriendoizq.gif)';

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

