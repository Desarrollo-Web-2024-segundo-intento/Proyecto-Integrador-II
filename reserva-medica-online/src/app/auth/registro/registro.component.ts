

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, ReactiveFormsModule, AbstractControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import { User } from '../../models/user';



@Component({
  selector: 'app-registro',
  standalone: true,

  imports: [RouterLink, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuarioData: Usuario = {
    apellido: '',
    nombre: '',
    telefono: '',
    dni: '',
    obraSocial: '',
    email: '',
    id: 0
  };



  constructor(private router: Router, private usuarioService: UsuarioService) { }

  grabarDatosPersonales(): void {
    this.usuarioService.setUsuarioData(this.usuarioData);
    console.log('Datos personales guardados:', this.usuarioData);
    this.router.navigate(['/dashboard/usuario/perfil']);
  };

    actualizarDatos(): void {
    this.usuarioService.updateUsuarioData(this.usuarioData);
    console.log('Datos personales actualizados:', this.usuarioData);
  }
}

  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  form:FormGroup;
  user: User = new User();


  constructor(private formBuilder:FormBuilder, private router:Router, private registroService:RegistroService) {
    this.form=this.formBuilder.group(
      {
        apellido:['',[Validators.required, this.nameValidator()], []],
        nombre:['',[Validators.required, this.nameValidator()], []],
        telefono:['',[Validators.required, this.telefonoValidator()], []],
        dni:['',[Validators.required, this.dniValidator()], []],
        mutual:['',[Validators.required, this.mutualValidator()], []],
        email:['',[Validators.required, this.emailValidator()], []],
        password:['',[Validators.required, this.passwordValidator], []]
      }
    )
  }

  ngOnInit(): void {
  }

  get Apellido(){
    //return this.form.controls['apellido'];
    return this.form.get("apellido")
  }
  get Nombre(){
    return this.form.get("nombre");
  }
  get Telefono(){
    return this.form.get("telefono");
  }
  get Dni(){
    return this.form.get("dni");
  }
  get Mutual(){
    return this.form.get("mutual");
  }
  get Email(){
    return this.form.get("email");
  }
  get Password(){
    return this.form.get("password");
  }

  onRegistrar(event: Event): void {
    event.preventDefault;

    if (this.form.valid){
      //alert ("El registro fue exitoso. Por favor, Inicie Sesión")
      this.registroService.createUser(this.form.value as User).subscribe(
        data => {
          console.log(data.id);
          console.log( this.form.value as User)
            if (data.id>0)
            {
              alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
              this.router.navigate(['/iniciarSesion'])
            }
        }
      )
      //this.router.navigate(['/iniciarSesion'])
      //this.form.reset()
    }
    else {
      this.form.markAllAsTouched();
    }
  }

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const regex = /^[A-Za-z]{3,}$/;
      return regex.test(value)? null : { 'invalidName': { value: control.value } };
    };
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email = control.value;
      const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      return regex.test(email)? null : { 'invalidEmail': { value: control.value } };
    };
  }

  telefonoValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const telefono = control.value;
      const regex = /^[0-9]{10,10}$/;
      return regex.test(telefono)? null : { 'invalidTelefono': { value: control.value } };
    };
  }

  dniValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const dni = control.value;
      const regex = /^[\d]{1,3}\.?[0-9]{3,3}\.?[\d]{3,3}$/;
      return regex.test(dni)? null : { 'invalidDni': { value: control.value } };
    };
  }

  mutualValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const mutual = control.value;
      const regex = /^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{2,60}[\,\-\.]{0,1}[\s]{0,1}){1,3}$/;
      return regex.test(mutual)? null : { 'invalidMutual': { value: control.value } };
    };
  }

  passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.value;
    const regex = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,20}$/;
    return regex.test(password)? null : { 'invalidPassword': { value: control.value } };
  
  get Dni(){
    return this.form.get("dni");
  }
  get Obra Social(){
    return this.form.get("mutual");
  }
  get Password(){
    return this.form.get("password");
  }
  get Email(){
    return this.form.get("email");
  }

}

