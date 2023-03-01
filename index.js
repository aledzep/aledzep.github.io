const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
function abrirForm () { 
  document.getElementById ("ventCont").style.display="block";
}
function cerrarForm () {
  document.getElementById ("ventCont").style.display="none";
}
function abrir () { 
  document.getElementById ("vent").style.display="block";
}
function abrir2 () { 
  document.getElementById ("vent2").style.display="block";
}
function abrir3 () { 
  document.getElementById ("vent3").style.display="block";
}
function abrir4 () { 
  document.getElementById ("vent4").style.display="block";
}
function cerrar () {
  document.getElementById ("vent").style.display="none";
}
function cerrar2 () {
  document.getElementById ("vent2").style.display="none";
}
function cerrar3 () {
  document.getElementById ("vent3").style.display="none";
}
function cerrar4 () {
  document.getElementById ("vent4").style.display="none";
}

