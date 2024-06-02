
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormsModule, NgModel } from '@angular/forms';
//import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink  } from '@angular/router';
import { InicioComponent } from '../../pages/inicio/inicio.component';
import { CommonModule } from '@angular/common';
//import { NgModule } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';
//import { Component } from '@angular/core';
//import { FormsModule, NgModel } from '@angular/forms';
//import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  //imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
  //imports: [RouterLink, FormsModule],
  imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})


export class IniciarSesionComponent {

  loginForm = this.formBuilder.group({
    email:["", [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder, private router:Router, private loginService: LoginService ) {}

  get correo(){
    return this.loginForm.controls.email;
  };
  get password(){
    return this.loginForm.controls.password;
  };


 //apellido="castillo"


  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest);
      this.router.navigateByUrl('/inicio');
    }
    else {
      this.loginForm.markAllAsTouched();
    };
  }
};
