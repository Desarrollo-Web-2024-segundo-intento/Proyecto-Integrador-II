import {Component  } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { EspecialidadesService } from '../../services/especialidades.service';
import { CarritoService } from '../../services/carrito.service';



@Component({
  selector: 'app-especial-medicas',
  standalone: true,
  imports: [EspecialMedicasComponent, NgIf, CommonModule],
  templateUrl: './especial-medicas.component.html',
  styleUrl: './especial-medicas.component.css'
})


export class EspecialMedicasComponent {
  especialidadesList:any[]=[];

  constructor(private EspecialidadesService: EspecialidadesService, private CarritoService: CarritoService){
}

ngOnInit(): void {
  this.especialidadesList = this.EspecialidadesService.getEspecialidades();
  
}
        
agregarCarrito(especialidad: any): void {
  especialidad.cantidadEnCarrito++;
  this.CarritoService.agregarAlCarrito(especialidad);

}
}





