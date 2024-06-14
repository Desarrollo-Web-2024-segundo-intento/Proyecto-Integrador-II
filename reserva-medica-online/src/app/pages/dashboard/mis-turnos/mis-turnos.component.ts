import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TurnosService } from '../../../services/turnos.service';
import { RouterLink } from '@angular/router';
import { Turno } from '../../../interfaces/turno';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-mis-turnos',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, FormsModule],
  templateUrl: './mis-turnos.component.html',
  styleUrl: './mis-turnos.component.css'
})
export class MisTurnosComponent implements OnInit {
    turnos: Turno[] = [];
  
    constructor(private turnosService: TurnosService, private apiService: ApiService) { }
  
    ngOnInit(): void {
      let username = localStorage.getItem('dni');
      if (username) {
        this.apiService.lista_turnos_usuario(username).subscribe(
          (data: Turno[]) => {
            this.turnos = data;
            console.log('Turnos del usuario:', this.turnos);
          },
          error => {
            console.error('Error al obtener los turnos del usuario', error);
          }
        );


      } else {
        console.error('Username no encontrado en localStorage');
      }
    }
  }