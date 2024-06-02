
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  Usuario = {
    apellido: '',
    nombre: '',
    telefono: '',
    dni: '',
    obraSocial: '',
    email: ''
  };
  

  private usuarioData:  Usuario | null = null;

  constructor() { }

  setUsuarioData(data: Usuario): void {
    this.usuarioData = data;
  }

  getUsuarioData(): Usuario | null {
    return this.usuarioData;
  }

  updateUsuarioData(data: Usuario): void {
    this.usuarioData = data ;
  }

  saveUsuarioData(data: Usuario): void {
    this.usuarioData = data;
    // Aquí puedes agregar lógica adicional para guardar los datos en el servidor o en local storage
    console.log('Datos guardados en el servicio:', this.usuarioData);
  }

}

