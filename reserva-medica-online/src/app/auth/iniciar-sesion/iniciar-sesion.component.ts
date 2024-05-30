import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InicioComponent } from '../../pages/inicio/inicio.component';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  loginForm = this.formBuilder.group({
    email:["paciente1@gmail.com", [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder, private router:Router) {}

  login(){
    if(this.loginForm.valid){
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl('/inicio');
    }
    else {
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos");
    };
  }
};