const seccionLogin = document.getElementById("login-section")
const vistaDatos_Personales = document.getElementById("registro_pacientes");
const divBotonVolver = document.getElementById("botonVolver");


function login(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario && contrasena) {
        // Lógica para procesar el login (por ejemplo, autenticación con el backend)
        alert("Login exitoso para " + usuario);
    } else {
        alert("Por favor, complete todos los campos.");
    }
}




function registro(event) {
    event.preventDefault(); 

    // const form = document.getElementById("registro_pacientes_form");
    const apellido = document.getElementById("apellido").value;
    const nombre = document.getElementById("nombre").value;

    if (apellido && nombre) {
        // Lógica para procesar el login (por ejemplo, autenticación con el backend)
        alert("Registro exitoso para " + apellido);
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Formulario para registrarse
const botonRegistro = document.getElementById("datos_personales_boton");
botonRegistro.addEventListener("click", () => {
    seccionLogin.style.display = "none";
    vistaDatos_Personales.style.display = "block";
    divBotonVolver.style.display = "flex";
})

const botonVolver = document.getElementById("volver");
botonVolver.addEventListener("click", () => {
    seccionLogin.style.display = "block";
    divBotonVolver.style.display = "none";
    vistaDatos_Personales.style.display ="none"

})

const botonGrabar = document.getElementById("datos_personales");
botonGrabar.addEventListener("click", () => {
    alert("Funcion que valida y guarda los datos en la BD del sistema");
    setTimeout(function(){
        window.location.href = '../index.html' //en barra de navegacion deberia haber algo que indique ya iniciamos sesion como "pepito sanchez"(ejemplo)
    },1000)

})