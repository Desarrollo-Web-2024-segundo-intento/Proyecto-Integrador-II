<?php

/* validaciones */

if (empty($_POST["dni"])) {
    die("Se requiere un DNI");
}

if (empty($_POST["nombre"])) {       
    die("Se requiere un Nombre"); 
}

if (empty($_POST["apellido"])) {
    die("Se requiere un apellido");
}

if (empty($_POST["email"])) {
    die("Se requiere un email");
}

if (empty($_POST["obra_social"])) {
    die("Se requiere que seleccione una obra social");
}

if (empty($_POST["contrasena"])) {
    die("Se requiere una contraseña");
}

if (strlen($_POST["contrasena"]) < 8) {
    die("La contraseña debe contener al menos 8 caracteres");
}

if(! preg_match("/[a-z]/i", $_POST["contrasena"])) {
    die("La contraseña debe contener al menos una letra");
}

if(! preg_match("/[0-9]/i", $_POST["contrasena"])) {
    die("La contraseña debe contener al menos un numero");
}

if($_POST["contrasena"] !== $_POST["contrasena_confirmar"]) {
    die("Las contraseñas deben ser idénticas");
}

$contrasena_hash = password_hash($_POST["contrasena"], PASSWORD_DEFAULT);

/* conectar a BD */

$conn = require __DIR__ . "/datosDB.php";

/* preparar los datos */

$sql = "INSERT INTO usuarios (dni, nombre, apellido, email, telefono, obra_social, fecha_nac, contrasena_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->stmt_init();

if ( ! $stmt-> prepare($sql)) {
    die("Error en SQL: " . $conn->error);
};

/* agregar datos a BD */

$stmt->bind_param("isssisss", 
                    $_POST["dni"],
                    $_POST["nombre"],
                    $_POST["apellido"],
                    $_POST["email"],
                    $_POST["telefono"],
                    $_POST["obra_social"],
                    $_POST["fecha_nacimiento"],
                    $contrasena_hash);

if ($stmt->execute()) {
    
    /* todo ok, ir a Bienvenida */

    header("Location: /registro_ok.html");
    exit;

} else {

    /* algo anduvo mal, revisar si email es unico*/
    if ($mysqli->errno === 1062) {
        die("Ese email ya existe");
    } else {
        die($mysqli->error . " " . $mysqli->errno);
    }

}




