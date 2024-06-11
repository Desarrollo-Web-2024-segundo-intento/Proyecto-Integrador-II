import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavDashbComponent } from './nav-dashb/nav-dashb.component';
import { NgIf } from '@angular/common';
import { ApiService } from '../../services/api.service';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, NavDashbComponent, NgIf]
})
export class DashboardComponent {
estaAutenticado=true;

constructor(private router: Router, private apiService:ApiService) {}

ngOnInit() {
  if (this.apiService.isLoggedIn()){
    this.router.navigate(['/dashboard']);
  } else {
    alert('Por favor, Inicia sesión para agendar un turno');
    this.router.navigate(['/iniciarSesion']);
  }
}

}
