import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  image1:string="assets/img/carrusel1.jpg";
  image2:string="assets/img/carrusel2.jpg";
  image3:string="assets/img/carrusel3.jpg";
  image4:string="assets/img/carrusel4.jpg";
}
