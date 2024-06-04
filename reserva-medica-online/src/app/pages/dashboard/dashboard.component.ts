import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavDashbComponent } from './nav-dashb/nav-dashb.component';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, NavDashbComponent, NgIf]
})
export class DashboardComponent {
estaAutenticado=true;

}
