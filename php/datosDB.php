<?php
// Datos de conexión a la base de datos
$host="localhost";
$usuario="root";
$clave="";
$basededatos="reservasmedicasdb";

// Crear conexión a la base de datos

$conn = new mysqli($host, $usuario, $clave, $basededatos);

/* revisar si se conecta */

if($conn->connect_error){
    die("Database Error: " . $conn->connect_error);
}

return $conn;

?>