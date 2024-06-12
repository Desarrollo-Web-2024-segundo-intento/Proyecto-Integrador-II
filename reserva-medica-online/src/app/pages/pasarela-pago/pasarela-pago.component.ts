import { Component } from '@angular/core';

@Component({
  selector: 'app-pasarela-pagos',
  templateUrl: './pasarela-pago.component.html',
  styleUrls: ['./pasarela-pago.component.css']
})
export class PasarelaPagosComponent {

  total: number = 0;
  metodoPago: string = 'tarjeta';
  detallesPago: any = {};

  procesarPago() {
    // Lógica para procesar el pago
  }
}
