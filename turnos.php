<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Reserva Medica On-Line</title>
    <link rel="icon" type="image/x-icon" href="./img/calendario1.ico">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <div id="cabecera">
        <h1>Reserva Medica ONLINE</h1>
    </div>

    <!-- <p>Este es un servicio para pacientes registrados.
            Si desea solicitar un turno, ingrese con su número de DNI y repita el mismo para contraseña.
            Puede cambiar su clave de ingreso, accediendo a Cambiar Contraseña</p> -->

    <header>
        <h1>Acceso para pacientes</h1>

        <!-- <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="turnos.html">Turnos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul> -->

        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <!-- <li><a href="turnos.html">Turnos</a></li> -->
                <li><a href="pacientenvo.html">Registrarme </a></li>
                <li><a href="contacto.html">Contacto</a></li>
                <li><a href="acercade.html">Acerca de</a></li>

            </ul>
            <div class="banner">
                <img class="portada" src="./img/banner.jpg" alt="">
            </div>
        </nav>
    </header>

    <form action="login.php" method="POST">

        <label for="dni_login">Ingrese su DNI:</label><br>
        <input type="text" id="dni_login" name="dni_login" value="" placeholder="N° de documento"><br>

        <label for="clave">Ingrese su clave:</label><br>
        <input type="text" id="clave" name="clave" value=""  placeholder="Contraseña"><br>

        <button>Ingresar</button>

        <div style="text-align:center">
            <p class="text">
                <strong><a href="./recuperarContrasenia.html">¿Olvidaste tu contraseña?</a></strong>.
            </p>
        </div>

        <div style="text-align:center">
            <p class="text">
                <strong>¿No tenés una cuenta? <a href="./pacientenvo.html">Registrate</a></strong>.
            </p>
        </div>

    </form>



    <footer>
        <div class="container">
            <div class="contact-info">
                <h3>Contacto</h3>
                <p><strong>Teléfono:</strong> 08002223456</p>
                <p><strong>Email:</strong> info@reservamedica.com</p>
                <p><strong>Dirección:</strong> Av. Valparaiso 1200 Cordoba Argentina</p>
            </div>
            <div class="useful-links">
                <h3>Enlaces Útiles</h3>
                <ul>
                    <li><a href="#">Preguntas Frecuentes</a></li>
                    <li><a href="#">Términos y Condiciones</a></li>
                    <li><a href="#">Política de Privacidad</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2024 Reserva Médica Online. Todos los derechos reservados.</p>
        </div>
    </footer>

</body>

</html>