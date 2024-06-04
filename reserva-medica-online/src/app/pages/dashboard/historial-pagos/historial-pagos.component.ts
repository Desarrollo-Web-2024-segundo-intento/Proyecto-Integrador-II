import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HistorialPago } from '../../../interfaces/historial-pago'; 

@Component({
  selector: 'app-historial-pagos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './historial-pagos.component.html',
  styleUrl: './historial-pagos.component.css'
})
export class HistorialPagosComponent {
  title="Historial de Pagos";

  historialPagos:HistorialPago[] = [

  {id:1, fecha: "2024-01-01", especialidad:"Ginecologia", profesional:"Montoto Laura", obraSocial:"Pami", monto: 1000, estado: "Aprobado" },
  {id:2, fecha: "2024-03-27", especialidad:"Gastroenterología", profesional:"Vera Beatriz", obraSocial:"Vitta", monto: 18000, estado: "rechazado" },
  {id:3, fecha: "2024-01-01", especialidad:"Ginecologia", profesional:"Montoto Laura", obraSocial:"Pami", monto: 1000, estado: "Aprobado" },
  {id:4, fecha: "2024-01-01", especialidad:"Ginecologia", profesional:"Montoto Laura", obraSocial:"Pami", monto: 1000, estado: "Aprobado" },

];
}
