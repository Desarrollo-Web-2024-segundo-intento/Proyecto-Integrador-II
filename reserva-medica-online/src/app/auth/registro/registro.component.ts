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
  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private router: Router) {
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

  ngOnInit() {
  }

  onEnviar(event: Event) {
    console.log(this.form.value)
      event.preventDefault;
      if (this.form.valid){
        alert ("El registro fue exitoso. Por favor, Inicie Sesión")
        this.form.reset()
        this.router.navigate(['/iniciarSesion'])
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
      //const regex = /^[A-Za-z]{3,}$/;
      const regex = /^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{2,60}[\,\-\.]{0,1}[\s]{0,1}){1,3}$/;
      return regex.test(mutual)? null : { 'invalidMutual': { value: control.value } };
    };
  }

  passwordValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.value;
    const regex = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,20}$/;
    return regex.test(password)? null : { 'passwordStrength': { value: control.value } };
  }



  get Apellido(){
    return this.form.get("apellido");
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
  get Password(){
    return this.form.get("password");
  }
  get Email(){
    return this.form.get("email");
  }

}
