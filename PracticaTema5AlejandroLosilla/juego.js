document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('.loader').style.display = 'block';
  document.querySelector('.contenido').style.display = 'none';

  setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.contenido').style.display = 'block';
  }, 4000);
});