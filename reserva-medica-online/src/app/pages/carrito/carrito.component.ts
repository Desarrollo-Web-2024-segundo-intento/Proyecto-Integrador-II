import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { FormsModule } from '@angular/forms';
import { Especialidad } from '../../interfaces/especialidad';



@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})


export class CarritoComponent implements OnInit  {
  carritoVacio:boolean=false;
  usuarioLogueado:boolean=true;
  especialidad: Especialidad | undefined;
  
  carritoItems: any[] = [];
  total: number = 0;

    
  constructor(private router: Router, private CarritoService: CarritoService) {}
    
  ngOnInit() {
    this.carritoItems = this.CarritoService.obtenerCarritoItems();
    this.actualizarTotal();
    }
    actualizarFechaHorario(index: number, fechaEvent: Event, horarioEvent: Event) {
      const fecha = (fechaEvent.target as HTMLInputElement).value || this.carritoItems[index].fecha;
      const horario = (horarioEvent.target as HTMLInputElement).value || this.carritoItems[index].horario;
      this.CarritoService.actualizarItem(index, fecha, horario);
      this.total = this.CarritoService.obtenerTotal();
      this.actualizarTotal();
    }
      actualizarTotal() {
        // this.total = this.CarritoService.obtenerTotal();
        this.total = this.calcularTotal();
      }
      calcularTotal() {
        return this.carritoItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
      }
 
    
    redirectToLogin() {
      this.router.navigate(['/iniciar-sesion']);
    }
  }





