<?php
// Datos de conexión a la base de datos
// $host="localhost";
// $usuario="root";
// $clave="";

// datos para test online 
// $host="ispcserver1.ddns.net";
// $usuario="desarrollo_web_2024";
// $clave="web_2024";
// puerto: 3306

// $basededatos="reservasmedicasdb";

// Crear conexión a la base de datos

$conn = require __DIR__ . "/php/datosDB.php";
// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir el DNI y la contraseña del formulario
$dni_login = $_POST['dni_login'];
$password = $_POST['clave'];

// Consulta SQL para buscar el usuario por DNI 
$sql = "SELECT * FROM pacientes WHERE dni = ?"; 

$stmt = $conn->prepare($sql);

// Verificar si la preparación de la consulta fue exitosa
if ($stmt === false) {
    die("Error en la preparación de la consulta: " . $conn->error);
}

// Vincular los parámetros

$stmt->bind_param("i", $dni_login);

// Ejecutar la consulta
$stmt->execute();

// Obtener el resultado de la consulta
$result = $stmt->get_result();

$fila = $result->fetch_assoc();

// Verificamos si hay filas (BD no vacía) y que las contraseñas coincidan...
// if (($result->num_rows > 0) and (password_verify($_POST['clave'], $fila["contrasena_hash"]))) {

    if (($result->num_rows > 0)) {

    // Entonces mostramos los datos del usuario ... 

    echo "<h2>Bienvenido! Estos son tus datos:</h2>";
    echo "DNI: " . $fila["DNI"] . "<br>";
    echo "Nombre: " . $fila["Nombre"] . "<br>";
    echo "Apellido: " . $fila["Apellido"] . "<br>";
    echo "email: " . $fila["correo"] . "<br>";
    echo "Teléfono: " . $fila["telefono"] . "<br>";
    echo "Obra Soocial: " . $fila["obra_social_id"] . "<br>";
    echo "Fecha de Nacimiento: " . $fila["fecha_nacimiento"] . "<br>";
    
} else {
    echo "Credenciales incorrectas. Por favor, inténtelo de nuevo.";
}

// Cerrar la conexión a la BD
$stmt->close();
$conn->close();
?>