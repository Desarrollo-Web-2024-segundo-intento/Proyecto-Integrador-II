<?php
// Datos de conexión a la base de datos
$host="localhost";
$usuario="root";
$clave="";
$basededatos="reservasmedicasdb";

// Crear conexión a la base de datos

$conn = new mysqli($host, $usuario, $clave, $basededatos);

// Recibir el DNI y la contraseña del formulario
$dni_login = $_POST['dni_login'];
$password = $_POST['clave'];

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta SQL para buscar el usuario por DNI 
$sql = "SELECT * FROM usuarios WHERE dni = ?"; 

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
if (($result->num_rows > 0) and (password_verify($_POST['clave'], $fila["contrasena_hash"]))) {

    // Entonces mostramos los datos del usuario ... 

    echo "<h2>Datos del usuario:</h2>";
    echo "DNI: " . $fila["dni"] . "<br>";
    echo "Nombre: " . $fila["nombre"] . "<br>";
    echo "Apellido: " . $fila["apellido"] . "<br>";
    echo "email: " . $fila["email"] . "<br>";
    echo "Teléfono: " . $fila["telefono"] . "<br>";
    echo "Obra Soocial: " . $fila["obra_social"] . "<br>";
    echo "Fecha de Nacimiento: " . $fila["fecha_nac"] . "<br>";
    
} else {
    echo "Credenciales incorrectas. Por favor, inténtelo de nuevo.";
}

// Cerrar la conexión a la BD
$stmt->close();
$conn->close();
?>