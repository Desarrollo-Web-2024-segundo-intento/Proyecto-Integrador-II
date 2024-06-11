

//import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Especialidad } from '../../interfaces/especialidad';
import { TurnosService } from '../../services/turnos.service';
import { PasarelaPagoService } from '../pasarela-pago/pasarela-pago.service';
import { Profesional } from '../../interfaces/profesional';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, TurnosComponent],
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  especialidadesList: Especialidad[] = [];
  profesionalesList: Profesional[] = [];
  // selected = "---";
  constructor(private router: Router, private turnosService: TurnosService, private pasarelaDePago: PasarelaPagoService, private apiService:ApiService) {}



  ngOnInit() {
    if (this.apiService.isLoggedIn()){
      this.router.navigate(['/turnos']);
    } else {
      alert('Por favor, Inicia sesión para agendar un turno');
      this.router.navigate(['/iniciarSesion']);
    }
    this.setupButtonEventListeners();
    this.getEspecialidades();
    this.getProfesionales();
  }

  getEspecialidades(): void {
    this.turnosService.obtenerEspecialidades().subscribe(data => {
      this.especialidadesList = data;
      console.log('Datos recibidos:', data);
    });
  }

  getProfesionales(): void {
    this.turnosService.obtenerProfesionales().subscribe(data => {
      this.profesionalesList = data;
      console.log('Datos recibidos:', data);
    });
  }

  // update(e){
  //   this.selected = e.target.value
  // }

  // trackById(index: number, especialidad: Especialidad): number {
  //   return especialidad.id;
  // }
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

    // Listener para confirmar la compra
    this.setupButtonEventListener('confirmarCompra', () => {
      console.log('Redirigiendo a la página del carrito de compras');
      this.router.navigate(['/dashboard/carrito-compras']);
    });

    // Listener para el botón de carrito de compras
    this.setupButtonEventListener('carritoCompras', () => {
      console.log('Redirigiendo a la pasarela de pagos');
      this.router.navigate(['/dashboard/pasarela-pagos']);
    });
  }

  setupButtonEventListener(buttonId: string, callback: () => void) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', callback);
    }
  }

  verFormTurno() {
    const vistaNuevoTurno = document.getElementById("vistaNuevoTurno");
    if (vistaNuevoTurno) {
      vistaNuevoTurno.style.display = 'block';
    }
    const boton_grabar_turno = document.getElementById("boton_grabar_turno");
    if (boton_grabar_turno) {
      boton_grabar_turno.style.display = 'block';
    }
  }

  verMenuPrincipal() {
    const menuPrincipal = document.getElementById("menuPrincipal");
    if (menuPrincipal) {
      menuPrincipal.style.display = 'block';
    }
  }

  verMisTurnos() {
    const vistaMisTurnos = document.getElementById("vistaMisTurnos");
    if (vistaMisTurnos) {
      vistaMisTurnos.style.display = 'block';
    }
  }

  verRegistrarme() {
    const registro_pacientes = document.getElementById("registro_pacientes");
    if (registro_pacientes) {
      registro_pacientes.style.display = 'block';
    }
    const boton_Grabar_registro = document.getElementById("boton_Grabar_registro");
    if (boton_Grabar_registro) {
      boton_Grabar_registro.style.display = 'block';
    }
  }

  verMenuBoton() {
    const menu_boton = document.getElementById("menu_boton");
    if (menu_boton) {
      menu_boton.style.display = 'block';
    }
    const botonVolver = document.getElementById("botonVolver");
    if (botonVolver) {
      botonVolver.style.display = 'block';
    }
  }

  ocultarSecciones() {
    const secciones = document.getElementsByClassName("contenedor_turnos");
    for (let i = 0; i < secciones.length; i++) {
      const element = secciones[i] as HTMLElement;
      element.style.display = 'none';
    }
  }

  ocultarVolver() {
    const botonVolver = document.getElementById("botonVolver");
    if (botonVolver) {
      botonVolver.style.display = 'none';
    }
  }
  pagos: {id: number,title:string, profesional: string, obra_social:string, fecha: string, price:number}[] = [
    { id: 1, title:"medico Clinico",profesional:"",obra_social:"",  fecha: '15-05-2024', price: 7600 },
    { id: 2, title:"Dermatologo",profesional:"Sebastian verne" ,obra_social:"Saraza",fecha: '16-05-2023', price: 7600,  },
  ]
  onProceedToPay(){
    this.pasarelaDePago.onProceedToPay(this.pagos)
  }
}
