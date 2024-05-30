import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoItems: any[] = [];
  private carritoItemCount = new BehaviorSubject<number>(0);
  carritoItemCount$ = this.carritoItemCount.asObservable();

  Carrito: any;

  constructor() { }

  agregarAlCarrito(item: any) {

    const existingItem = this.carritoItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.cantidad++;
      existingItem.subtotal += item.precio;
    } else {
      const carritoItem = {
        id: item.id,
        titulo: item.titulo,
        precio: item.precio,
        cantidad: 1,
        fecha: '',
        horario: '',
        subtotal: item.precio
      };
      this.carritoItems.push(carritoItem);
    }
    this.carritoItemCount.next(this.carritoItems.reduce((acc, item) => acc + item.cantidad, 0));
  }
  
  

  obtenerCarritoItems() {
    return this.carritoItems;
  }

  actualizarItem(index: number, fecha: string, horario: string) {
    if (this.carritoItems[index]) {
      this.carritoItems[index].fecha = fecha;
      this.carritoItems[index].horario = horario;
    }
  }

  obtenerTotal() {
    return this.carritoItems.reduce((total, item) => total + item.subtotal, 0);
  }


}

