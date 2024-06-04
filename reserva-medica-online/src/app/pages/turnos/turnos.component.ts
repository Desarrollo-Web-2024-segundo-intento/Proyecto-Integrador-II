

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TurnosService } from '../../services/turnos.service';
import { Router, RouterLink } from '@angular/router';
import { Turno } from '../../interfaces/turno';  


@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  turnoData: Turno = {
    id: 0,
    especialidad: "",
    profesional: "",
    fecha: "",
    hora: "",
    obraSocial: ""
  };

  constructor(private router: Router, private turnosService: TurnosService) {}

  guardarTurnos(): void {
    console.log("Turnos guardados", this.turnoData);
    this.router.navigate(['/dashboard/mis-turnos']);  
  }

  ngOnInit() {
    this.setupButtonEventListeners();  
  }

  setupButtonEventListeners() {
    this.setupButtonEventListener('nuevoTurno', () => {
      this.ocultarSecciones();
      this.verFormTurno();
      this.verMenuBoton();
    });

    this.setupButtonEventListener('misTurnos', () => {
      this.ocultarSecciones();
      this.verMisTurnos();
      this.verMenuBoton();
    });

    this.setupButtonEventListener('datos_personales_boton', () => {
      this.ocultarSecciones();
      this.verRegistrarme();
      this.verMenuBoton();
    });

    this.setupButtonEventListener('botonVolver', () => {
      this.ocultarSecciones();
      this.verMenuPrincipal();
      this.ocultarVolver();
      console.log('presionaste boton volver');
    });

    this.setupButtonEventListener('boton_grabar_turno', () => {
      console.log('Aca va la funcion de la Api Rest para grabar el turno');
      alert('Aca va la funcion de la Api Rest para grabar el turno');
      this.ocultarSecciones();
      this.verMenuPrincipal();
      this.ocultarVolver();
    });

    this.setupButtonEventListener('boton_Grabar_registro', () => {
      console.log('Aca va la funcion de la Api Rest para grabar el registro del paciente');
      alert('Aca va la funcion de la Api Rest para grabar el registro del paciente');
      this.ocultarSecciones();
      this.verMenuPrincipal();
      this.ocultarVolver();
    });
  }

  setupButtonEventListener(id: string, callback: () => void) {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener('click', callback);
    }
  }

  ocultarElemento(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = "none";
    }
  }

  verElemento(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = "block";
    }
  }

  verElemento_grid(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = "grid";
    }
  }

  ocultarSecciones() {
    this.ocultarElemento('menuPrincipal');
    this.ocultarElemento('vistaNuevoTurno');
    this.ocultarElemento('vistaMisTurnos');
    this.ocultarElemento('registro_pacientes');
    this.ocultarElemento('boton_grabar_turno');
    this.ocultarElemento('boton_Grabar_registro');
    this.ocultarElemento('menu_boton');
    this.ocultarElemento('datos_personales');
    this.ocultarElemento('registrarNuevo');
  }

  verFormTurno() {
    this.verElemento('vistaNuevoTurno');
    this.verElemento('boton_grabar_turno');
    this.verElemento('registrarNuevo');   
    this.verElemento('botonVolver');
  }

  verMisTurnos() {
    this.verElemento('vistaMisTurnos');
    this.verElemento('botonVolver');
  }

  verRegistrarme() {
    this.verElemento('registro_pacientes');
    this.verElemento('boton_grabar_turno');   
    this.verElemento('boton_Grabar_registro');
    this.verElemento('datos_personales');    
    this.verElemento('botonVolver');
  }

  verMenuPrincipal() {
    this.verElemento_grid('menuPrincipal');
  }

  verMenuBoton() {
    this.verElemento_grid('menu_boton');
  }

  ocultarVolver() {
    this.ocultarElemento('botonVolver');
  }
}
