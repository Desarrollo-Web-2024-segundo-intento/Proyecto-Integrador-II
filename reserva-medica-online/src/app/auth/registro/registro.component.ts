import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, ReactiveFormsModule, AbstractControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroError:string="";
  registroForm=this.formBuilder.group({
    apellido:['',[Validators.required, this.nameValidator()], []],
    nombre:['',[Validators.required, this.nameValidator()], []],
    telefono:['',[Validators.required, this.telefonoValidator()], []],
    dni:['',[Validators.required, this.dniValidator()], []],
    mutual:['',[Validators.required, this.mutualValidator()], []],
    email:['',[Validators.required, this.emailValidator()], []],
    password:['',[Validators.required, this.passwordValidator], []]
  })

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  get apellido(){
    return this.registroForm.controls.apellido;
  }
  get nombre(){
    return this.registroForm.controls.nombre;
  }
  get telefono(){
    return this.registroForm.controls.telefono;
  }
  get dni(){
    return this.registroForm.controls.dni;
  }
  get mutual(){
    return this.registroForm.controls.mutual;
  }
  get email(){
    return this.registroForm.controls.email;
  }
  get password(){
    return this.registroForm.controls.password;
  }

  registrar() {
  if (this.registroForm.valid){
    alert ("El registro fue exitoso. Por favor, Inicie Sesión")
    this.router.navigate(['/iniciarSesion'])
    this.registroForm.reset()
  }
  else {
    this.registroForm.markAllAsTouched();
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

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.value;
      const regex = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,20}$/;
      return regex.test(password)? null : { 'invalidPassword': { value: control.value } };
    };
  }
}
