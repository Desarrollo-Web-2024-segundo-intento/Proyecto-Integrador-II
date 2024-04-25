const menuPrincipal = document.getElementById("menuPrincipal");
const vistaNuevoTurno = document.getElementById("vistaNuevoTurno");
const vistaMisTurnos = document.getElementById("vistaMisTurnos");
const divBotonVolver = document.getElementById("botonVolver");

const botonNuevoTurno = document.getElementById("nuevoTurno");
botonNuevoTurno.addEventListener("click", () => {
    menuPrincipal.style.display = "none";
    vistaNuevoTurno.style.display = "flex";
    divBotonVolver.style.display = "flex";
})

const botonMisTurnos = document.getElementById("misTurnos");
botonMisTurnos.addEventListener("click", () => {
    menuPrincipal.style.display = "none";
    vistaMisTurnos.style.display = "block";
    divBotonVolver.style.display = "flex";
})

const botonVolver = document.getElementById("volver");
botonVolver.addEventListener("click", () => {
    menuPrincipal.style.display = "flex";
    vistaMisTurnos.style.display = "none";
    vistaNuevoTurno.style.display = "none";
    divBotonVolver.style.display = "none";
})