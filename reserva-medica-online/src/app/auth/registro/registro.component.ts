import { Component } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators, ValidatorFn, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  form:FormGroup;

  constructor(private apiService: ApiService, private router: Router, private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group(
      {
        apellido:['',[Validators.required, Validators.pattern(/^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{2,60}[\,\-\.]{0,1}[\s]{0,1}){1,3}$/)], []],
        nombre:['',[Validators.required, Validators.pattern(/^([a-zA-ZáéíóúüÁÉÍÓÚÜñÑ]{2,60}[\,\-\.]{0,1}[\s]{0,1}){1,3}$/)], []],
        //telefono:['',[Validators.required, this.telefonoValidator()], []], pattern: /^[0-9]{10,10}$/
        dni:['',[Validators.required, Validators.pattern(/^[\d]{1,3}\.?[0-9]{3,3}\.?[\d]{3,3}$/)], []],
        //mutual:['',[Validators.required, this.mutualValidator()], []], pattern igual a normbre y apellido
        email:['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)], []],
        password:['',[Validators.required, Validators.pattern(/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,20}$/)], []]
      }
    )
  }

  onSubmit(event:Event): void {
    event.preventDefault;

    if (this.form.valid) {
      console.log('entre a la rutina onsubmit');
      const newUser = {
        username: this.form.value.dni,
        first_name: this.form.value.nombre,
        last_name: this.form.value.apellido,
        email: this.form.value.email,
        password: this.form.value.password,
      };
      this.apiService.register(newUser).subscribe(
        response => {
          console.log('Registro exitoso:', response);
          alert('registro exitoso');
          this.router.navigate(['/iniciarSesion']);
        },
        error => {
          console.error('Error en el registro:', error);
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Apellido(){
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
