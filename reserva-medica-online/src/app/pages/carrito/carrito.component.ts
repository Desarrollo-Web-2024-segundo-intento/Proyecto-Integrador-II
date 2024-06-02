import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialidad } from '../../interfaces/especialidad';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carritoVacio: boolean = false;
  usuarioLogueado: boolean = true;
  especialidad: Especialidad | undefined;

  carritoItems: any[] = [];
  total: number = 0;

  constructor(private router: Router, private carritoService: CarritoService) {}

  ngOnInit() {
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
