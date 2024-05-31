import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-historial-pagos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './historial-pagos.component.html',
  styleUrl: './historial-pagos.component.css'
})
export class HistorialPagosComponent {
  title:string="Historial de Pagos";

  historialPagos: any[] = [
  { fecha: "2024-01-01", especialidad:"Ginecologia", profesional:"Montoto Laura", obraSocial:"Pami", monto: 1000, estado: "Aprobado" },
  { fecha: "2024-03-27", especialidad:"Gastroenterología", profesional:"Vera Beatriz", obraSocial:"Vitta", monto: 18000, estado: "rechazado" },
  { fecha: "2024-01-01", especialidad:"Ginecologia", profesional:"Montoto Laura", obraSocial:"Pami", monto: 1000, estado: "Aprobado" },
  { fecha: "2024-01-01", especialidad:"Ginecologia", profesional:"Montoto Laura", obraSocial:"Pami", monto: 1000, estado: "Aprobado" },
  

];
}
