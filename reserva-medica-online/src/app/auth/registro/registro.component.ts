import { Component } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';

// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterLink, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

//PATRI
 // usuarioData: Usuario = {
   // id: 0,
 //   apellido: '',
//    nombre: '',
//    telefono: '',
  //  dni: '',
  //  obraSocial: '',
  //  email: '',
//



export class RegistroComponent {
  form:FormGroup;
  user = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router, private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group(
      {
        apellido:['',[Validators.required], []],
        nombre:['',[Validators.required], []],
        //telefono:['',[Validators.required, this.telefonoValidator()], []],
        dni:['',[Validators.required], []],
        //mutual:['',[Validators.required, this.mutualValidator()], []],
        email:['',[Validators.required], [Validators.email]],
        password:['',[Validators.required], []]
      }
    )
  }

  onSubmit(event:Event): void {
    event.preventDefault;
    console.log('entre a la rutina onsubmit');
    this.apiService.register(this.user).subscribe(
      response => {
        console.log('Registro exitoso:', response);
        alert('registro exitoso');
        this.router.navigate(['/iniciarSesion']);
      },
      error => {
        this.form.markAllAsTouched();
        console.error('Error en el registro:', error);
      }
    );
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Apellido(){
  //return this.form.controls['apellido'];
  return this.form.get("apellido")
 }

  get Dni(){
    return this.form.get("dni");
  }

  get Email(){
  return this.form.get("email");
  }

  get Password(){
    return this.form.get("password");
  }

}

//  get Apellido(){
//    //return this.form.controls['apellido'];
//    return this.form.get("apellido")
// }

// get Telefono(){
//   return this.form.get("telefono");
// }
// get Dni(){
//   return this.form.get("dni");
// }
// get Mutual(){
//   return this.form.get("mutual");
// }
// get Email(){
//   return this.form.get("email");
// }
// get Password(){
//   return this.form.get("password");
// }

// nameValidator(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const value = control.value;
//     const regex = /^[A-Za-z]{3,}$/;
//     return regex.test(value)? null : { 'invalidName': { value: control.value } };
//   };
// }

// emailValidator(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const email = control.value;
//     const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//     return regex.test(email)? null : { 'invalidEmail': { value: control.value } };
//   };
// }

// telefonoValidator(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const telefono = control.value;
//     const regex = /^[0-9]{10,10}$/;
//     return regex.test(telefono)? null : { 'invalidTelefono': { value: control.value } };
//   };
// }

// dniValidator(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const dni = control.value;
//     const regex = /^[\d]{1,3}\.?[0-9]{3,3}\.?[\d]{3,3}$/;
//     return regex.test(dni)? null : { 'invalidDni': { value: control.value } };
//   };
// }

// mutualValidator(): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const mutual = control.value;
//     const regex = /^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{2,60}[\,\-\.]{0,1}[\s]{0,1}){1,3}$/;
//     return regex.test(mutual)? null : { 'invalidMutual': { value: control.value } };
//   };
// }

// passwordValidator(control: AbstractControl): { [key: string]: any } | null {
//   const password = control.value;
//   const regex = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,20}$/;
//   return regex.test(password)? null : { 'invalidPassword': { value: control.value } };
// }
// }
