import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TurnosService } from '../../../services/turnos.service';
import { RouterLink } from '@angular/router';
import { Turno } from '../../../interfaces/turno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mis-turnos',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, FormsModule],
  templateUrl: './mis-turnos.component.html',
  styleUrl: './mis-turnos.component.css'
})
export class MisTurnosComponent implements OnInit {
  // turnos: any[] = [];
  // turno:Turno | undefined;
  turnoData: any={};
  updated:boolean=false;
    // id: 0,
    // especialidad: "",
    // profesional: "",
    // fecha: "",
    // hora: "",
    // obraSocial: ""
  // };

  constructor(private turnosService: TurnosService) { }
  ngOnInit(): void {
    this.turnoData= this.turnosService.turno
  }
  

//   agregarTurno(): void {
//     this.turnosService.agregarTurno(this.nuevoTurno).subscribe((turno: any) => {
//       console.log('Turno registrado:', turno);
//       this.nuevoTurno = {
//         id:0 ,
//         especialidad: '',
//         profesional: '',
//         fecha: '',
//         hora: '',
//         obraSocial:'',
//       };
//     });
//   }
}