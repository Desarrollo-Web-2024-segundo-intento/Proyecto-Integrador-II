import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, ReactiveFormsModule, AbstractControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.form=this.formBuilder.group(
      {
        nombre:['',[Validators.required]],
        email:['',[Validators.required, this.emailValidator()]],
        mensaje:['',[Validators.required]]
      }
    )
  }

  ngOnInit() {
  }

  onEnviar(event:Event){
    console.log(this.form.value)
    event.preventDefault;
      if (this.form.valid){
        alert ("El mensaje fue enviado con éxito")
        this.form.reset()
      }
      else {
        this.form.markAllAsTouched();
      }
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const email = control.value;
      const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      return regex.test(email)? null : { 'invalidEmail': { value: control.value } };
    };
  }

  get Nombre(){
    return this.form.get("nombre");
  }
  get Email(){
    return this.form.get("email");
  }
  get Mensaje(){
    return this.form.get("mensaje");
  }
}
