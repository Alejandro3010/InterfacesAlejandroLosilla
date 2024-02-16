document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.loader').style.display = 'block';
  document.querySelector('.contenido').style.display = 'none';
  document.querySelector('.bg').style.display = 'none';
  document.querySelector('.suelo').style.display = 'none';
  document.querySelector('.nube1').style.display = 'none';
  document.querySelector('.nube2').style.display = 'none';
  document.querySelector('.nube3').style.display = 'none';
  document.querySelector('.nube4').style.display = 'none';

  setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.contenido').style.display = 'block';
    document.querySelector('.bg').style.display = 'block';
  }, 4000);
});

function jugar() {
  document.querySelector('.contenido').style.display = 'none';
  document.querySelector('.suelo').style.display = 'block';
  document.querySelector('.bg').style.display = 'none';
  document.querySelector('.nube1').style.display = 'block';
  document.querySelector('.nube2').style.display = 'block';
  document.querySelector('.nube3').style.display = 'block';
  document.querySelector('.nube4').style.display = 'block';
}