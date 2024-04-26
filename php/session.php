<?php
//inicio de session
session_start();

include("datosDB.php");

global $idCuenta, $cliente;

//valida que la session este iniciada con id de la cuenta
if(!empty($_SESSION) && isset($_SESSION['idCuenta']) && $_SESSION['idCuenta']){
    $idCuenta = $_SESSION['idCuenta'];
    //obtiene el nombre de la cuenta
    $consulta = "SELECT nombre FROM cuenta WHERE idCuenta = $idCuenta";
    $query = $conn->query($consulta);
    $cliente = $query->fetch_array();
}
//sino devuelve vacio
else{
    $idCuenta = 0;
    $cliente = array();
}