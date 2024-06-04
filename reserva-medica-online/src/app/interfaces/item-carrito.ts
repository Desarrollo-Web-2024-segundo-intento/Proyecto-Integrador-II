import { Usuario } from "./usuario";

export interface ItemCarrito extends Usuario {
    numero_carrito: number;
    titulo: string;
    precio: number | undefined;
    cantidad: number | undefined;
    fecha: string;
    hora: string;
    subtotal: number;

}


