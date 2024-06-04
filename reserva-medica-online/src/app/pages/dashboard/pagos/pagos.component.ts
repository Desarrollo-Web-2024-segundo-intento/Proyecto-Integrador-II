import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {
  title:string="Pagos Realizados";

  
  pagos: {id: number,especialidad:string, profesional: string, obra_social:string, fecha: string, monto:number}[] = [
    { id: 1, especialidad:"medico Clinico",profesional:"",obra_social:"",  fecha: '15-05-2024', monto: 100, },
    { id: 2, especialidad:"Dermatologo",profesional:"Sebastian verne" ,obra_social:"Saraza",fecha: '16-05-2023', monto: 200 },

  ]


}