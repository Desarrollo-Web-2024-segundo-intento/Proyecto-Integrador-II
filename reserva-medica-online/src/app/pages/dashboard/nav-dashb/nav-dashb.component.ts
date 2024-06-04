import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../services/carrito.service';

@Component({
  selector: 'app-nav-dashb',
  standalone: true,
  imports: [NgIf,RouterLink, NgClass],
  templateUrl: './nav-dashb.component.html',
  styleUrl: './nav-dashb.component.css'
})
export class NavDashbComponent implements OnInit {
  estaAutenticado: boolean=false;

  carritoItemCount = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.carritoItemCount$.subscribe(count => {
      this.carritoItemCount = count;
    });
  }
}
