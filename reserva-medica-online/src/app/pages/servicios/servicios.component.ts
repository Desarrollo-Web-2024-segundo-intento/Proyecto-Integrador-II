import { Component, OnInit } from '@angular/core';
import { EspecialMedicasComponent } from '../especial-medicas/especial-medicas.component';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServiciosComponent, EspecialMedicasComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
 })



export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Se ha iniciado el componente de servicios.');
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch('http://192.168.0.170:8000/api/v1/especialidad/?format=json');
      if (!response.ok) {
        console.error('Error en la respuesta de la solicitud.');
        return;
      }
      const data = await response.json();
      console.log('Datos recibidos:', data);

      for (const item of data) {
        const newDiv = document.createElement('div'); // este constante genera el div contenedor de la especialidad

        // Crear elementos para especialidad y descripción
        const especialidadText = document.createElement('div');
        especialidadText.innerText = item.especialidad; // Carga el contenido de especialidad

        const descripcionText = document.createElement('div1');
        descripcionText.innerText = item.descripcion; // Carga el contenido de la descripción

        // Agregar los elementos al nuevo div
        newDiv.appendChild(especialidadText);
        newDiv.appendChild(descripcionText);

        // Aplicar estilos al nuevo div
        newDiv.style.width = '200px';
        newDiv.style.height = '300px';
        newDiv.style.backgroundColor = 'white';
        newDiv.style.display = 'flex';
        newDiv.style.flexDirection = 'column';
        newDiv.style.justifyContent = 'center';
        newDiv.style.alignItems = 'center';
        newDiv.style.border = '2px solid black';
        newDiv.style.float = 'left';
        newDiv.style.margin = '10px'; // Margen para separación entre divs

        const appDiv = document.getElementById('servicios'); // Asegúrate de que este sea el ID correcto
        if (appDiv) {
            appDiv.appendChild(newDiv);
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

