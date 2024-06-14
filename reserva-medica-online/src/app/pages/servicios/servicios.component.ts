import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Especialidad } from '../../interfaces/especialidad';
import { ServiciosService } from '../../services/servicios.service';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, ServiciosComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})

export class ServiciosComponent implements OnInit {
  especialidadesList: Especialidad[] = [];

  constructor(private serviciosService: ServiciosService, private router: Router, private apiService: ApiService,) { }

  ngOnInit():void {
    console.log('Se ha iniciado el componente de servicios.');
    //this.fetchData();
    this.getEspecialidades();
  }

  getEspecialidades(): void {
    this.serviciosService.obtenerEspecialidades().subscribe(data => {
      this.especialidadesList = data;
      console.log('Datos recibidos:', data);
    });
  }

  trackById(index: number, especialidad: Especialidad): number {
    return especialidad.id;
  }

  agendarTurno(event:Event): void{
    event.preventDefault;
    this.router.navigate(['/turnos']); //por ahora lo dejamos asi ...
     if (this.apiService.isLoggedIn()){
       this.router.navigate(['/turnos']);
     } else {
       alert('Por favor, Inicia sesión para agendar un turno');
       this.router.navigate(['/iniciarSesion']);
     }
  }
}
