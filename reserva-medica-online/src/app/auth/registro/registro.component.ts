import { Component } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})


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

