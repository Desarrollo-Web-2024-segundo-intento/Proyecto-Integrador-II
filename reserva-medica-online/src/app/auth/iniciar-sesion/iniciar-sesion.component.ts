
// import { Component, OnInit, NgModule } from '@angular/core';
// import { FormBuilder, ReactiveFormsModule, Validators, FormsModule, NgModel } from '@angular/forms';
// //import { ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router, RouterLink  } from '@angular/router';
// import { InicioComponent } from '../../pages/inicio/inicio.component';
// import { CommonModule } from '@angular/common';
// //import { NgModule } from '@angular/core';
// import { LoginService } from '../../services/auth/login.service';
// import { LoginRequest } from '../../services/auth/loginRequest';
// //import { Component } from '@angular/core';
// //import { FormsModule, NgModel } from '@angular/forms';
// //import { RouterLink } from '@angular/router';


// @Component({
//   selector: 'app-iniciar-sesion',
//   standalone: true,
//   //imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
//   //imports: [RouterLink, FormsModule],
//   imports: [ReactiveFormsModule, CommonModule, RouterLink, FormsModule],
//   templateUrl: './iniciar-sesion.component.html',
//   styleUrl: './iniciar-sesion.component.css'
// })


// export class IniciarSesionComponent {

//   loginForm = this.formBuilder.group({
//     email:["", [Validators.required, Validators.email]],
//     password: ['', Validators.required],
//   });
//   constructor(private formBuilder: FormBuilder, private router:Router, private loginService: LoginService ) {}

//   get correo(){
//     return this.loginForm.controls.email;
//   };
//   get password(){
//     return this.loginForm.controls.password;
//   };

//   login(){
//     if(this.loginForm.valid){
//       this.loginService.login(this.loginForm.value as LoginRequest);
//       this.router.navigateByUrl('/inicio');
//     }
//     else {
//       this.loginForm.markAllAsTouched();
//     };
//   }
// };

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "../../services/api.service";
// import { RouterLink } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../../shared/nav/nav.component';



@Component({
  // selector: 'app-login',
    selector: 'app-iniciar-sesion',
  standalone: true,
  // imports: [RouterLink, FormsModule],
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive, FormsModule],

  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})

export class IniciarSesionComponent{
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      dni: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {}
  userLoginOn: boolean = false; // Iniciar sesión por defecto
   onSubmit(): void {
    if (this.loginForm.valid) {
      const { dni, password } = this.loginForm.value;
      this.apiService.login(dni, password).subscribe(
        response => {
          console.log('Login exitoso', response);
          this.toggleLoginStatus();
          console.log(this.userLoginOn);
          this.loginForm.reset()
          this.router.navigate(['/servicios']);
        },
        error => {
          console.error('Error de login', error);
        }
      );
    }
  }

  // showLoginElements() {
  //   this.loginElement.nativeElement.style.display = 'flex';
  //   this.logoutElement.nativeElement.style.display = 'none';
  // }

  // hideLoginElements() {
  //   this.loginElement.nativeElement.style.display = 'none';
  //   this.logoutElement.nativeElement.style.display = 'flex';
  // }

  toggleLoginStatus() {
    this.userLoginOn = true; // Cambiar el estado de inicio de sesión
  }
}