import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgModule } from '@angular/core';




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