import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Especialidad } from '../../interfaces/especialidad';
import { TurnosService } from '../../services/turnos.service';
import { PasarelaPagoService } from '../pasarela-pago/pasarela-pago.service';
import { Profesional } from '../../interfaces/profesional';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, TurnosComponent,  ReactiveFormsModule ],
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {
  especialidadesList: Especialidad[] = [];
  profesionalesList: Profesional[] = [];
  turnoForm: FormGroup;
  constructor(private router: Router, 
              private turnosService: TurnosService, 
              private pasarelaDePago: PasarelaPagoService,
              private apiService:ApiService,
              private fb: FormBuilder) {
                this.turnoForm = this.fb.group({
                  especialidad: ['', Validators.required],
                  profesional: ['', Validators.required],
                  fecha_turno: ['', Validators.required],
                  hora_turno: ['', Validators.required]
                });
              }

  ngOnInit() {
    this.setupButtonEventListeners();
    this.getEspecialidades();
    this.getProfesionales();
  }

  onSubmit(): void {
    if (this.turnoForm.valid) {
      let dni_cliente = localStorage.getItem('dni');
      const fecha_turno = this.turnoForm.get('fecha_turno')?.value;
      const hora_turno = this.turnoForm.get('hora_turno')?.value;
      const profesional_id = this.turnoForm.get('profesional')?.value;
      const especialidad_turno = this.turnoForm.get('especialidad')?.value;
      if (fecha_turno && hora_turno && profesional_id !== null) {
        const turnoData = {
          username: dni_cliente,
          fecha_turno: fecha_turno,
          hora_turno: hora_turno,
          estado_turno_id: '1',
          profesional_id: profesional_id,
          especialidad: especialidad_turno
        };
        // console.log('Datos del turno:', turnoData);
        localStorage.setItem('datos_turno', JSON.stringify(turnoData));
        // let datos = localStorage.getItem('datos_turno');
        // console.log('los datos: ' + datos);
        this.apiService.nuevo_turno();
        this.onProceedToPay();
        // this.router.navigate(['/dashboard/mis-turnos']);
      } else {
        console.error('Error: Uno de los campos del formulario es null o undefined.');
      }
    } else {
      this.turnoForm.markAllAsTouched();
    }
  }

  getEspecialidades(): void {
    this.turnosService.obtenerEspecialidades().subscribe((data: Especialidad[]) => {
      this.especialidadesList = data;
      console.log('Datos recibidos:', data);
    });
  }
  onChangeEspecialidad(event: any) {
    const especialidadId = event.target.value;
    if (especialidadId) {
      this.turnosService.getProfesionalesPorEspecialidad(especialidadId).subscribe((data: any) => {
        this.profesionalesList = data;
      });
    } else {
      this.profesionalesList = []; 
    }
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
  // ESTO DEBERIA ESTAR COMO UN BOTON "PAGAR" EN EL CARRITO LLEVANDO OBVIAMENTE LOS DATOS DEL CARRITO
  onProceedToPay(){
    this.pasarelaDePago.onProceedToPay(this.pagos);
  }
}
