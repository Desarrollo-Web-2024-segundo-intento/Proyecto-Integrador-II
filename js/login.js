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
