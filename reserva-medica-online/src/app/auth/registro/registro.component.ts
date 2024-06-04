import { Component } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
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
  imports: [RouterLink, FormsModule],
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
  user = {
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''

  };

  constructor(private apiService: ApiService, private router: Router) { }

  onSubmit() {
    console.log('entre a la rutina onsubmit');
    this.apiService.register(this.user).subscribe(
      response => {
        console.log('Registro exitoso:', response);
        alert('registro exitoso');
        this.router.navigate(['/iniciarSesion']);
      },
      error => {
        console.error('Error en el registro:', error);
      }
    );
  }
}

