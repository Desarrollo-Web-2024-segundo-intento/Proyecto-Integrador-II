
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../../shared/nav/nav.component';


@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive, FormsModule],
    templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})

export class IniciarSesionComponent{
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder, private apiService: ApiService, private router: Router) {
      this.loginForm = this.fb.group({
        dni:['',[Validators.required, Validators.pattern(/^[\d]{1,3}\.?[0-9]{3,3}\.?[\d]{3,3}$/)], []],
        password:['',[Validators.required, Validators.pattern(/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,20}$/)], []]
    });
  }

  ngOnInit(): void {}
  userLoginOn: boolean = false; // Iniciar sesión por defecto
  onSubmit(event:Event): void {
    event.preventDefault;
    if (this.loginForm.valid) {
      const { dni, password } = this.loginForm.value;
      this.apiService.login(dni, password).subscribe(
        response => {
          // console.log('Login exitoso', response);
          // console.log(response.user.username);
          // console.log(response.token);
          //-------------------------------------------------------------------
          //aca grabamos en el cache del navegador el token y el dni del
          //paciente
          //-------------------------------------------------------------------
          localStorage.setItem('token', response.token);
          localStorage.setItem('dni', response.user.username);
          //-------------------------------------------------------------------
          //a modo de verificacion en las 4 lineas siguientes leemos lo que esta
          //grabado en el cache del navegador y lo publicamos por consola
          //-------------------------------------------------------------------
          let dni_cliente = localStorage.getItem('dni');
          console.log('El dni del paciente es : ' + dni_cliente);
          let token_cliente = localStorage.getItem('token');
          console.log('El token del paciente es : ' +token_cliente);
          //-------------------------------------------------------------------
          //luego reseteamos el formulario y vaos a la page servicios
          //-------------------------------------------------------------------
          this.loginForm.reset()
          this.router.navigate(['/servicios']);
          //-------------------------------------------------------------------
        },
        error => {
          console.error('Error de login', error);
        }
      );
    }
    else {
      this.loginForm.markAllAsTouched();
    };
  }
  get Dni(){
    return this.loginForm.get("dni");
  }
  get Password(){
    return this.loginForm.get("password");
  }
}


// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { ApiService } from "../../services/api.service";
// // import { RouterLink } from '@angular/router';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { NavComponent } from '../../shared/nav/nav.component';



// @Component({
//   // selector: 'app-login',
//   selector: 'app-iniciar-sesion',
//   standalone: true,
//   // imports: [RouterLink, FormsModule],
//   imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterLinkActive, FormsModule],

//   templateUrl: './iniciar-sesion.component.html',
//   styleUrl: './iniciar-sesion.component.css'
// })

// export class IniciarSesionComponent{
//   loginForm: FormGroup;

//   constructor(
//     private fb: FormBuilder, private apiService: ApiService, private router: Router) {
//       this.loginForm = this.fb.group({
//         // dni: ['', Validators.required, []],
//         // password: ['', Validators.required, []]

//         dni:['',[Validators.required, Validators.pattern(/^[\d]{1,3}\.?[0-9]{3,3}\.?[\d]{3,3}$/)], []],
//         password:['',[Validators.required, Validators.pattern(/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,20}$/)], []]
//     });
//   }

//   ngOnInit(): void {}

//   userLoginOn: boolean = false; // Iniciar sesión por defecto
//   onSubmit(event:Event): void {
//     event.preventDefault;
//     if (this.loginForm.valid) {
//       const { dni, password } = this.loginForm.value;
//       this.apiService.login(dni, password).subscribe(
//         response => {
//           console.log('Login exitoso', response);
//           //this.toggleLoginStatus();
//           //console.log(this.userLoginOn);
//           this.loginForm.reset()
//           this.router.navigate(['/servicios']);
//         },
//         error => {
//           console.error('Error de login', error);
//         }
//       );
//     }
//     else {
//       this.loginForm.markAllAsTouched();
//     };
//   }

//   // showLoginElements() {
//   //   this.loginElement.nativeElement.style.display = 'flex';
//   //   this.logoutElement.nativeElement.style.display = 'none';
//   // }

//   // hideLoginElements() {
//   //   this.loginElement.nativeElement.style.display = 'none';
//   //   this.logoutElement.nativeElement.style.display = 'flex';
//   // }

//   get Dni(){
//     return this.loginForm.get("dni");
//   }

//   get Password(){
//     return this.loginForm.get("password");
//   }

//   toggleLoginStatus() {
//     this.userLoginOn = true; // Cambiar el estado de inicio de sesión
//   }
// }
