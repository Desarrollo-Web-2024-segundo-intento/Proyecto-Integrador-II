<?php
// Datos de conexión a la base de datos

// datos para test online 
$host="ispcserver1.ddns.net";
$usuario="desarrollo_web_2024";
$clave="web_2024";
// puerto: 3306

// datos para Xampp (local)

// $host="localhost";
// $usuario="root";
// $clave="";

$basededatos="reservasmedicasdb";

// Crear conexión a la base de datos

$conn = new mysqli($host, $usuario, $clave, $basededatos);

/* revisar si se conecta */

if($conn->connect_error){
    die("Database Error: " . $conn->connect_error);
}

return $conn;

?>