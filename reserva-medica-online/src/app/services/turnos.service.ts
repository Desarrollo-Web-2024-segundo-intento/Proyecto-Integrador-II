import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Turno } from '../interfaces/turno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  turno={
    id:0,
    especialidad:"",
    profesional:"",
    fecha: "",
    hora: "",
    obraSocial:"",
  }
  // turno: Turno[]=[]

  API_URI="http://localhost:4200/turnos"
  // private turnos: any[] = [];

  // constructor(private http: HttpClient) {} 

  // agregarTurno(turno: Turno): Observable<any> {
  //   // this.turnos.push(turno);
  //   return this.http.post<any>(`${this.API_URI}/agregarTurno`, turno);
  // }

  // obtenerTurnos() {
  //   return this.turnos;
  // }

}
