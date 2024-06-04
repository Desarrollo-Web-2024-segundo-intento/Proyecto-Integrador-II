import { Injectable } from '@angular/core';


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


  API_URI=""
 

}
