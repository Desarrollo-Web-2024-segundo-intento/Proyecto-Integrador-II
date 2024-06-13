import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent{
 userLoginOn: boolean = false;
 constructor(public apiService: ApiService, private router: Router) {}

 onLogout(): void {
  this.apiService.logout();
  this.router.navigate(['/iniciarSesion']);
 }
}
