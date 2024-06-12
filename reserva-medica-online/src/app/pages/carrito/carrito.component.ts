import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Especialidad } from '../../interfaces/especialidad';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carritoVacio: boolean = false;
  usuarioLogueado: boolean = true;
  especialidad: Especialidad | undefined;

  carritoItems: any[] = [];
  total: number = 0;

  constructor(private router: Router, private carritoService: CarritoService, private apiService: ApiService) {}

  ngOnInit() {
    if (this.apiService.isLoggedIn()){
      this.router.navigate(['/carrito']);
    } else {
      alert('Por favor, Inicia sesión para agendar un turno');
      this.router.navigate(['/iniciarSesion']);
    }
    this.carritoItems = this.carritoService.obtenerCarritoItems();
    this.actualizarTotal();
  }

  actualizarFechaHorario(index: number, event: Event, tipo: string) {
    const valor = (event.target as HTMLInputElement).value;
    if (tipo === 'fecha') {
      this.carritoItems[index].fecha = valor;
    } else if (tipo === 'horario') {
      this.carritoItems[index].horario = valor;
    }
    this.carritoService.actualizarItem(index, this.carritoItems[index].fecha, this.carritoItems[index].horario);
    this.actualizarTotal();
  }

  actualizarTotal() {
    this.total = this.calcularTotal();
  }

  calcularTotal() {
    return this.carritoItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  irAPasarelaPagos() {
    this.router.navigate(['/pasarela-pagos']);
  }
}
