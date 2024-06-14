import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',

})
export class PerfilComponent implements OnInit {
  title: string="Perfil";
  userData: any = null;

  constructor() { }

  ngOnInit(): void {
    // Cargar datos del localStorage al iniciar el componente
    this.loadUserDataFromLocalStorage();
  }

  loadUserDataFromLocalStorage(): void {
    const nombre = localStorage.getItem('nombre');
    const apellido = localStorage.getItem('apellido');
    const dni = localStorage.getItem('dni');
    const email = localStorage.getItem('email');

    if (nombre && apellido && dni && email) {
      this.userData = {
        nombre,
        apellido,
        dni,
        email
      };
    }
  }
}
