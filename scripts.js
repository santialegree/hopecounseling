// Cuando el usuario hace scroll hacia abajo 20px desde la parte superior de la página, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Cuando el usuario hace clic en el botón, vuelve a la parte superior de la página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function escaparCaracteresEspeciales(texto) {
  return encodeURIComponent(texto);
}

