# Accept a Payment with Stripe Checkout

Stripe Checkout is the fastest way to get started with payments. Included are some basic build and run scripts you can use to start up the application.

## Running the sample

1. Build the server

~~~
npm install
~~~

2. Run the server

~~~
npm start
~~~

3. Go to [http://localhost:4242/checkout.html](http://localhost:4242/checkout.html)

# Pasarela de Pago Test de Stripe

## Backend

Este repositorio contiene un microservicio backend para probar la pasarela de pago test de Stripe.

### Instrucciones de Uso

1. Navega a la carpeta stripe_server desde la raíz del proyecto.
2. Dirigirse hacia “package.json”
3. Buscar dentro del archivo el comando “start”, posicionar el cursor sobre el mismo y seleccionar run script.
Esto iniciará el servidor backend. Asimismo, para detenerlo realizar la misma acción pero seleccionando “Debug Script”.
Frontend
![image](https://github.com/Desarrollo-Web-2024-segundo-intento/Proyecto-Integrador-II/assets/69865928/5e093412-21ae-4611-a46e-03b2eed69b31)

1.	Navega a la carpeta del frontend desde la raíz del proyecto.
2.	Ejecuta el package.json del front de la misma manera que con el back, el cual se encuentra dentro de src/app.
Pasarela de Pago Test de Stripe
1.	Accede a la sección “turnos”.
2.	Selecciona “agendar turno”, lo que enviará al usuario a la pasarela de pago de Stripe en modo "Test".
3.	Utiliza la siguiente tarjeta de prueba proporcionada por Stripe:
o	Número de tarjeta: 4242 4242 4242 4242
o	País: Estados Unidos
o	En el resto de campos, utiliza cualquier otra información al azar.
o	Proceder a pagar.
o	Luego de ello, te llevara al Inicio.
Con estos pasos, podrás probar la pasarela de pago test de Stripe en tu entorno local, para detener el proyecto presionar “Debug Script”, en el package.json
