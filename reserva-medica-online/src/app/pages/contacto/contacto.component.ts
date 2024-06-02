import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, ReactiveFormsModule, AbstractControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactoError:string="";
  contactoForm=this.formBuilder.group({
    nombre:['',[Validators.required, this.nameValidator()]],
    email:['',[Validators.required, this.emailValidator()], []],
    mensaje:['',[Validators.required]]
  })

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  get nombre(){
    return this.contactoForm.controls.nombre;
  }
  get email(){
    return this.contactoForm.controls.email;
  }
  get mensaje(){
    return this.contactoForm.controls.mensaje;
  }

  enviar(){
    if (this.contactoForm.valid){
      alert ("El mensaje fue enviado con éxito")
      this.contactoForm.reset()
    }
    else {
      this.contactoForm.markAllAsTouched();
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
}
