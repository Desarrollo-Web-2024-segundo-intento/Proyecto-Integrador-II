// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-turnos',
//   standalone: true,
//   imports: [],
//   templateUrl: './turnos.component.html',
//   styleUrl: './turnos.component.css'
// })
// export class TurnosComponent {

// }
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [],
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent {
  ngOnInit() {
    const nuevoTurnoBtn = document.getElementById('nuevoTurno');
    if (nuevoTurnoBtn) {
      nuevoTurnoBtn.addEventListener('click', () => {
        this.ocultarSecciones();
        this.verFormTurno();
        this.verMenuBoton();
      });
    }
    const misTurnoBtn = document.getElementById('misTurnos');
    if (misTurnoBtn) {
      misTurnoBtn.addEventListener('click', () => {
        this.ocultarSecciones();
        this.verMisTurnos();
        this.verMenuBoton();
      });
    }
    const registrarmeBtn = document.getElementById('datos_personales_boton');
    if (registrarmeBtn) {
      registrarmeBtn.addEventListener('click', () => {
        this.ocultarSecciones();
        this.verRegistrarme();
        this.verMenuBoton();
        // this.verBotonGuardarRegistro();
      });
    }
    const volverBtn = document.getElementById('botonVolver');
    if (volverBtn) {
      volverBtn.addEventListener('click', () => {
        this.ocultarSecciones();
        this.verMenuPrincipal();
        this.ocultarVolver();
        console.log('presionaste boton volver');
      });
    }
    const guardaTurnoBtn = document.getElementById('boton_grabar_turno');
    if (guardaTurnoBtn) {
      guardaTurnoBtn.addEventListener('click', () => {
        console.log('Aca va la funcion de la Api Rest para grabar el turno');
        alert('Aca va la funcion de la Api Rest para grabar el turno');
        this.ocultarSecciones();
        this.verMenuPrincipal();
        this.ocultarVolver();
      });
    }
    const guardaRegistroBtn = document.getElementById('boton_Grabar_registro');
    if (guardaRegistroBtn) {
      guardaRegistroBtn.addEventListener('click', () => {
        console.log('Aca va la funcion de la Api Rest para grabar el registro del paciente');
        alert('Aca va la funcion de la Api Rest para grabar el registro del paciente');
        this.ocultarSecciones();
        this.verMenuPrincipal();
        this.ocultarVolver();
      });
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
    // console.log("aca esta la funciona de ocultar los div formularios");
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
    // console.log('aca prendo el formulario Nuevo turno')
    this.verElemento('vistaNuevoTurno');
    this.verElemento('boton_grabar_turno');
    this.verElemento('registrarNuevo');   
    this.verElemento('botonVolver');
  }
  verMisTurnos() {
    // console.log('aca prendo el formulario Mis Turnos')
    this.verElemento('vistaMisTurnos');
    this.verElemento('botonVolver');
  }
  verRegistrarme() {
    // console.log('aca prendo el formulario Registrarme')
    this.verElemento('registro_pacientes');
    this.verElemento('boton_grabar_turno');   
    this.verElemento('boton_Grabar_registro');
    this.verElemento('datos_personales');    
    this.verElemento('botonVolver');
  }
  verMenuPrincipal() {
    // console.log('aca prendo el Menu principal')
    this.verElemento_grid('menuPrincipal');
  }
  verMenuBoton() {
    // console.log('aca prendo el Menu principal')
    this.verElemento_grid('menu_boton');
  }
  // verBotonGuardarRegistro() {
  //   // console.log('aca prendo el Menu principal')
  //   this.verElemento('datos_personales');
  // }
  ocultarVolver(){
    // console.log('aca apago el boton volover')
    this.ocultarElemento('botonVolver')

  }

}
