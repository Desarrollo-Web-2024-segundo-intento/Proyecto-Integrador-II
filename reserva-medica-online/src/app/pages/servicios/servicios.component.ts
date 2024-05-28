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
//   ngOnInit() {
//     console.log('aca ingreso a la funcion oninit')
//     interface ApiResponse {
//       id: number;
//       especialidad: string;
//     }

//     async function fetchData() {
//       try {
//         const response = await fetch('http://192.168.0.170:8000/api/v1/especialidad');
//         console.log('aca cargo la constate del api')
//         if (!response.ok) {
//           console.log('error de jason')
//         }
//         const data: ApiResponse = await response.json();
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     document.addEventListener('DOMContentLoaded', () => {
//       console.log('una linea antes de empezar fetch')
//       fetchData();

//       const serviciosLink = document.getElementById('servicios');
//       if (serviciosLink) {
//         serviciosLink.addEventListener('click', (event) => {
//           event.preventDefault();
//           fetchData();
//         });
//       }
//     });
//   }
// }


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
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  onServiciosClick(event: Event) {
    event.preventDefault();
    this.fetchData();
  }

}