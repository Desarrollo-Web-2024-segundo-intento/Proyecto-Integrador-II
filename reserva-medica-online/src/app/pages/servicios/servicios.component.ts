import { Component } from '@angular/core';
import { EspecialMedicasComponent } from '../especial-medicas/especial-medicas.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ServiciosComponent, EspecialMedicasComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
