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
