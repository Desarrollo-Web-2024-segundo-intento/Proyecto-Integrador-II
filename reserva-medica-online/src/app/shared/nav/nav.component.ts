
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgModule } from '@angular/core';

import { NgIf } from '@angular/common';
//import { Component } from '@angular/core';
//import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavDashbComponent } from '../../pages/dashboard/nav-dashb/nav-dashb.component';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent{
  userLoginOn: boolean = false;   
  }
  imports: [NavComponent, RouterLink, RouterLinkActive, NavDashbComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
 
}

