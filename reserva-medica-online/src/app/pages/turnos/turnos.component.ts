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

  setupButtonEventListeners() {
    this.setupButtonEventListener('nuevoTurno', () => {
      this.ocultarSecciones();
      this.verFormTurno();
      this.verMenuBoton();
    });

    this.setupButtonEventListener('datos_personales_boton', () => {
      this.ocultarSecciones();
      this.verMenuBoton();
    });

    this.setupButtonEventListener('botonVolver', () => {
      this.ocultarSecciones();
      this.verMenuPrincipal();
      this.ocultarVolver();
      console.log('presionaste boton volver');
    });

    this.setupButtonEventListener('boton_grabar_turno', () => {
      console.log('Aca va la funcion de la Api Rest para grabar el turno');//esto es lo que debemos mostrar en carrito
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

  //LO DE MATI QUE SE MUESTRA EN STRIPE
  pagos: {id: number,title:string, profesional: string, obra_social:string, fecha: string, price:number}[] = [
    { id: 1, title:"medico Clinico",profesional:"",obra_social:"",  fecha: '15-05-2024', price: 7600 },
    { id: 2, title:"Dermatologo",profesional:"Sebastian verne" ,obra_social:"Saraza",fecha: '16-05-2023', price: 7600,  },
  ]
  //ESTO DEBERIA ESTAR COMO UN BOTON "PAGAR" EN EL CARRITO LLEVANDO OBVIAMENTE LOS DATOS DEL CARRITO
  onProceedToPay(){
    this.pasarelaDePago.onProceedToPay(this.pagos)
  }
}
