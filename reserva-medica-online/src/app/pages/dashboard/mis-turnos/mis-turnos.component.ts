import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TurnosService } from '../../../services/turnos.service';
import { RouterLink } from '@angular/router';
import { Turno } from '../../../interfaces/turno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mis-turnos',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, FormsModule],
  templateUrl: './mis-turnos.component.html',
  styleUrl: './mis-turnos.component.css'
})
export class MisTurnosComponent implements OnInit {



  constructor(private turnosService: TurnosService) { }
  ngOnInit(): void {

  }
  
}