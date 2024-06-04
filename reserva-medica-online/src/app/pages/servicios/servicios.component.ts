import { Component, OnInit } from '@angular/core';
import { EspecialMedicasComponent } from '../especial-medicas/especial-medicas.component';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServiciosComponent, EspecialMedicasComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'

})
// export class ServiciosComponent {
// imgBajaComplejidad="assets/img/imga.png";
// imgMedianaComplejidad="assets/img/imgb.png";
// imgAltaComplejidad="assets/img/imgc.png";
// imgObraSocial1="assets/img/medife.png";
// imgObraSocial2="assets/img/osde.png";
// imgObraSocial3="assets/img/sancor.png";
// imgObraSocial4="assets/img/galeno.jpg";
// imgObraSocial5="assets/img/Prevencion_Salud.png";
// imgObraSocial6="assets/img/avalian.png";
// imgObraSocial7="assets/img/pami.jpg";
// imgObraSocial8="assets/img/apross.jpg";
// imgObraSocial9="assets/img/swissmedical.png"
// imgObraSocial10="assets/img/federadasalud.jpg";
// imgObraSocial11="assets/img/sipssa.jpg";

//  })



export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Se ha iniciado el componente de servicios.');
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/especialidad/?format=json');
      // const response = await fetch('http://casaiot.ddns.net:8000/api/v1/especialidad/?format=json');
      if (!response.ok) {
        console.error('Error en la respuesta de la solicitud.');
        return;
      }
      const data = await response.json();
      console.log('Datos recibidos:', data);

          for (let i = 0; i < data.length; i++) {

        const newDiv = document.createElement('div'); // este constante genera el div contenedor de la especialidad
        newDiv.id = 'div' + i;
        newDiv.style.width = '22%';
        newDiv.style.height = '400px';
        newDiv.style.backgroundColor = 'white';
        newDiv.style.display = 'flex';
        newDiv.style.flexDirection = 'column';
        newDiv.style.justifyContent = 'center';
        newDiv.style.alignItems = 'center';
        newDiv.style.border = '2px solid black';
        newDiv.style.borderRadius = '10px';
        newDiv.style.float = 'left';
        newDiv.style.margin = '10px'; // Margen para separación entre divs
        const appDiv = document.getElementById('servicios'); // Asegúrate de que este sea el ID correcto
        if (appDiv) {
            appDiv.appendChild(newDiv);
        } else {
            console.error('No se encontró el elemento con id "app"');
        }
        const div_contenedor = document.createElement('div'); // Crea el div contenedor de div_titulo y div_carrito
        div_contenedor.style.width = '100%';
        div_contenedor.style.backgroundColor = 'yellow';
        div_contenedor.style.display = 'flex';
        div_contenedor.style.flexDirection = 'row';
        div_contenedor.style.justifyContent = 'center';
        div_contenedor.style.alignItems = 'center';
        newDiv.appendChild(div_contenedor);

        const div_titulo = document.createElement('div'); // este constante genera el div contenedor de la especialidad
        div_titulo.id = 'div_titulo';
        div_titulo.innerText = data[i].especialidad;
        div_titulo.style.width = '55%';
        div_titulo.style.height = '50px';
        div_titulo.style.backgroundColor = 'green';
        div_titulo.style.display = 'flex';
        div_titulo.style.flexDirection = 'column';
        div_titulo.style.justifyContent = 'center';
        div_titulo.style.alignItems = 'center';
        div_titulo.style.border = '2px solid black';
        div_titulo.style.margin = '10px'; // Margen para separación entre divs
        div_contenedor.appendChild(div_titulo);

        const div_padre = document.getElementById('div'+i); // Asegúrate de que este sea el ID correcto
        if (div_padre) {
            div_padre.appendChild(div_titulo);
        } else {
            console.error('No se encontró el elemento con id "app"');
        }

        const div_carrito = document.createElement('div'); // este constante genera el div contenedor de la especialidad
        div_carrito.id = 'div_carrito';
        // div_carrito.innerText = 'Carrito';
        div_carrito.style.width = '30%';
        div_carrito.style.height = '50px';
        div_carrito.style.backgroundColor = 'transparent';
        div_carrito.style.display = 'flex';
        div_carrito.style.flexDirection = 'column';
        div_carrito.style.justifyContent = 'center';
        div_carrito.style.alignItems = 'center';
        div_carrito.style.border = '1px solid black';
        div_carrito.style.margin = '10px'; // Margen para separación entre divs

        // const div_padre = document.getElementById('div'+i); // Asegúrate de que este sea el ID correcto
        // if (div_padre) {
        //     div_padre.appendChild(div_carrito);
        // } else {
        //     console.error('No se encontró el elemento con id "app"');
        // }
            // Añadir div_titulo y div_carrito a div_contenedor
            div_contenedor.appendChild(div_titulo);
            div_contenedor.appendChild(div_carrito);


            // Crear y configurar la imagen
            const img = document.createElement('img');
            img.src = 'assets/img/carrito.png'; // Cambia esta ruta a la de tu imagen
            img.alt = 'Carrito';
            img.style.width = '50px'; // Ajusta el tamaño según sea necesario
            img.style.height = '50px'; // Ajusta el tamaño según sea necesario

            // Añadir la imagen al div_carrito
            div_carrito.appendChild(img);










        // Añadir div_contenedor a newDiv
          // newDiv.appendChild(div_contenedor);

        const div_descripcion = document.createElement('div'); // este constante genera el div contenedor de la especialidad
        div_descripcion.id = 'div_descripcion';
        div_descripcion.innerText = data[i].descripcion;
        div_descripcion.style.width = '98%';
        div_descripcion.style.height = '450px';
        div_descripcion.style.font='12px';
        div_descripcion.style.backgroundColor = 'gray';
        div_descripcion.style.display = 'flex';
        div_descripcion.style.flexDirection = 'column';
        div_descripcion.style.justifyContent = 'center';
        div_descripcion.style.alignItems = 'center';
        div_descripcion.style.border = '2px solid black';
        // div_titulo.style.float = 'left';
        div_descripcion.style.margin = '10px'; // Margen para separación entre divs

        if (div_padre) {
            div_padre.appendChild(div_descripcion);
        } else {
            console.error('No se encontró el elemento con id "app"');
        }

        const div_boton_turno = document.createElement('div'); // este constante genera el div contenedor de la especialidad
        div_boton_turno.id = 'div_descripcion';
        div_boton_turno.innerText = 'Agendar Turno';
        div_boton_turno.style.width = '90%';
        div_boton_turno.style.height = '50px';
        div_boton_turno.style.font='12px';
        div_boton_turno.style.backgroundColor = 'orange';
        div_boton_turno.style.display = 'flex';
        div_boton_turno.style.flexDirection = 'column';
        div_boton_turno.style.justifyContent = 'center';
        div_boton_turno.style.alignItems = 'center';
        div_boton_turno.style.border = '2px solid black';
        // div_titulo.style.float = 'left';
        div_boton_turno.style.margin = '10px'; // Margen para separación entre divs

        if (div_padre) {
            div_padre.appendChild(div_boton_turno);
        } else {
            console.error('No se encontró el elemento con id "app"');
        }















      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  onServiciosClick(event: Event) {
    event.preventDefault();
    this.fetchData();
  }

}

//       for (const item of data) {

//         const newDiv = document.createElement('div');// este constante genera el div contenedor de la especialidad
//         newDiv.innerText = item.especialidad;// este innertext carga el contenido de especialidad en el dom
//         newDiv.style.width = '200px';
//         newDiv.style.height = '300px';
//         newDiv.style.backgroundColor = 'white';
//         newDiv.style.display = 'flex';
//         newDiv.style.justifyContent = 'center';
//         newDiv.style.alignItems = 'center';
//         newDiv.style.border = '2px solid black';
//         newDiv.style.float = 'left';
//         const appDiv = document.getElementById('servicios'); //adentro de la caja servicios incrustar lo q voy a crear
//         if (appDiv) {
//             appDiv.appendChild(newDiv);
//         } else {
//             console.error('No se encontró el elemento con id "app"');
//         }














//          //createDiv();
//     }



//     } catch (error) {
//       console.error('Error al obtener datos:', error);
//     }
//   }

//   onServiciosClick(event: Event) {
//     event.preventDefault();
//     this.fetchData();
//   }

// }

// // src/app.ts

// // Función para crear un div y añadirlo al DOM
// function createDiv(): void {
//   // Crear un nuevo elemento div
//   const newDiv = document.createElement('div');

//   // Asignar contenido y estilo al div
//   newDiv.innerText = 'Este es un nuevo div creado con TypeScript';
//   newDiv.style.width = '200px';
//   newDiv.style.height = '200px';
//   newDiv.style.backgroundColor = 'blue';
//   newDiv.style.display = 'flex';
//   newDiv.style.justifyContent = 'center';
//   newDiv.style.alignItems = 'center';
//   newDiv.style.border = '2px solid black';
//   newDiv.style.float = 'left';

//   // Obtener el elemento del DOM donde se añadirá el nuevo div
//   const appDiv = document.getElementById('servicios'); //adentro de la caja servicios incrustar lo q voy a crear
//   // Asegurarse de que el elemento existe
//   if (appDiv) {
//       appDiv.appendChild(newDiv);
//   } else {
//       console.error('No se encontró el elemento con id "app"');
//   }
// }

