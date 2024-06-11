import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turno } from '../interfaces/turno';
import { Especialidad } from '../interfaces/especialidad';
import { Profesional } from '../interfaces/profesional';


@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  private apiUrl1 = 'http://127.0.0.1:8000/api/v1/especialidad/';
  private apiUrl2 = 'http://127.0.0.1:8000/api/v1/profesionales/';
  // turno={
  //   id:0,
  //   especialidad:"",
  //   profesional:"",
  //   fecha: "",
  //   hora: "",
  //   obraSocial:"",
  // }
  // turno: Turno[]=[]

  // API_URI="http://localhost:4200/turnos"
  // private turnos: any[] = [];

  // constructor(private http: HttpClient) {}

  // agregarTurno(turno: Turno): Observable<any> {
  //   // this.turnos.push(turno);
  //   return this.http.post<any>(`${this.API_URI}/agregarTurno`, turno);
  // }

  // obtenerTurnos() {
  //   return this.turnos;
  // }

  constructor(private http: HttpClient) { }

  obtenerEspecialidades(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(this.apiUrl1);
  }

  obtenerProfesionales(): Observable<Profesional[]> {
    return this.http.get<Profesional[]>(this.apiUrl2);
  }

}
